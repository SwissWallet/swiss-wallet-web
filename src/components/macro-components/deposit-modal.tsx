import { useState } from "react";
import { BackButton } from "../micro-components/back-button";
import { MainButton } from "../micro-components/main-button";
import { UserInput } from "../micro-components/user-input";
import { api } from "../../lib/axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { RadioButton } from "../micro-components/radio-button";
interface DepositModalProps {
    closeDepositModal: () => void,
}

export function DepositModal({
    closeDepositModal
}: DepositModalProps) {

    const [username, setUsername] = useState("");
    const [deposit, setDeposit] = useState("");

    const [ amountPoints, setAmountPoints ] = useState("");
    const [ selectedOption, setSelectedOption ] = useState('');

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    const [textAlert, setTextAlert] = useState("");

    async function registerDeposit() {
        const token = localStorage.getItem('token');
        // http://localhost:8080/api/v3/accounts/register-deposit?username=joao@email.com&value=300

        await api.post(`/v3/accounts/register-deposit?username=${username}&value=${deposit}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }

    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!username.endsWith(".com") || !username.includes("@")) {
            setTextAlert("email inválido");
            return
        };

        if (deposit === "") {
            setTextAlert("insira um depósito");
            return
        };

        registerDeposit();
        closeDepositModal();
    };

    const user = useSelector((state: RootState) => state.authUser.value);

    const role = user.user.role;
    const isClient = role === "ROLE_CLIENT";

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <form onSubmit={handdleSubmit} className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <BackButton type="button" onClick={closeDepositModal} />
                <div className="flex flex-col gap-3">
                    {isClient ? (
                        <h1 className="text-4xl font-medium">Compre pontos</h1>
                    ) : (
                        <h1 className="text-4xl font-medium">Deposite</h1>
                    )}
                    <p className="font-medium text-sm text-zinc-600 ml-4">Todos os campos são obrigatórios</p>
                </div>
                {!isClient && (
                    <div className="flex items-center w-full relative h-auto">
                        <p className="absolute  text-red-700 text-center w-full font-medium text-lg">
                            {textAlert}
                        </p>
                    </div>
                )}
                {isClient ? (
                    <div className="flex flex-col gap-5">
                        <UserInput
                            position="center"
                            placeholder="ex: 150"
                            onChange={(e) => setAmountPoints(e.target.value)}
                        >Quantidade de pontos
                        </UserInput>
                        <RadioButton
                            selectedOption={selectedOption}
                            handleOptionChange={handleOptionChange} 
                            options={["débito", "crédito", "pix"]}
                        />
                    </div>
                ) : (
                    <>
                        <UserInput
                            position="center"
                            placeholder="ex: jose@senaisp.com"
                            onChange={(e) => setUsername(e.target.value)}
                        >E-mail do usuário
                        </UserInput>
                        <UserInput
                            position="center"
                            placeholder="ex: 250"
                            onChange={(e) => setDeposit(e.target.value)}
                        >Depósito
                        </UserInput>
        
                        <MainButton type="submit">Depositar</MainButton>
                    </>
                )}
            </form>
        </div>
    )
}