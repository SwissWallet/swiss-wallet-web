import { BackButton } from "../../components/micro-components/back-button";
import { UserInput } from "../../components/micro-components/user-input";
import { MainButton } from "../../components/micro-components/main-button";

interface ChangeAddressModalProps{
    closeChangeAddressModal: () => void,
}

export function ChangeAddressModal({
    closeChangeAddressModal,
}:ChangeAddressModalProps){
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <form className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <BackButton type="button" onClick={closeChangeAddressModal} />

                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-medium">Altere seu endereço</h1>
                    <p className="font-medium text-sm text-zinc-600 ml-4">Todos os campos são obrigatórios</p>
                </div>
                <div className="flex flex-col gap-6">
                    <UserInput 
                        placeholder="ex: 11560130" 
                        type="number" 
                        name="cep" 
                        maxLength={8} minLength={8} required
                    >CEP</UserInput>

                    <div className="flex items-center gap-5 ">
                        <UserInput placeholder="ex: São Paulo" type="text">Cidade</UserInput>
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-medium text-base'>UF</h2>
                                <input 
                                    type="text"
                                    placeholder="ex: SP"
                                    minLength={2} maxLength={2} required
                                    className='outline-none rounded-md p-2 border-2 border-zinc-300  font-medium placeholder-slate-400
                                                focus:not-italic focus:border-red-600 placeholder:font-light placeholder:italic'
                                />
                        </div>
                    </div>

                    <UserInput placeholder="ex: Conselheiro Crispiniano" type="text" name="street" readOnly>Rua</UserInput>
                    <UserInput 
                        placeholder="ex: 22" 
                        type="number" 
                        name="complement" 
                        minLength={1} required
                    >Número</UserInput>

                </div>
                <div className="flex justify-center items-center">
                    <MainButton type="submit">
                        Alterar
                    </MainButton>
                </div>

            </form>
        </div>
    )
}