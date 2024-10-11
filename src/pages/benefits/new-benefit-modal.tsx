import { BackButton } from "../../components/micro-components/back-button";
import { MainButton } from "../../components/micro-components/main-button";
import { UserInput } from "../../components/micro-components/user-input";

interface NewBenefitModalProps{
    setOpenNewBenefit: (e: boolean) => void;
}

export function NewBenefitModal({
    setOpenNewBenefit,
}: NewBenefitModalProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <form className="bg-white rounded-lg w-[600px] h-auto p-5 flex gap-8 flex-col">
                <BackButton type="button" onClick={() => setOpenNewBenefit(false)} />

                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-medium">Cadastre novo beneficio</h1>
                    <p className="font-medium text-sm text-zinc-600 ml-4">Todos os campos são obrigatórios</p>
                </div>

                <UserInput position="center" placeholder="ex: Vale Transporte">Título</UserInput>
                <div className="w-full text-center gap-3 flex flex-col">
                    <label className="text-lg font-medium">Descrição</label>
                    <textarea 
                        placeholder="Ex: Este benefício auxilia alunos com seu transporte à unidade de estudo"
                        className="w-full outline-none rounded-md p-2 border-2 border-zinc-300  font-medium placeholder-slate-400
                        focus:not-italic focus:border-red-600 placeholder:font-light placeholder:italic"
                    />
                </div>
                <div className={`flex gap-10 justify-center items-center`}>
                <MainButton
                    width="min"
                >Novo Benefício
                </MainButton>
                </div>
            </form>
        </div>
    )
};