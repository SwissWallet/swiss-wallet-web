import { BackButton } from "../../components/micro-components/back-button";
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

                <UserInput position="center">Título</UserInput>
                <label className="text-lg font-medium text-center">Descrição</label>
                <textarea className="w-full outline-none rounded-md p-2 border-2 border-zinc-300  font-medium placeholder-slate-400
                    focus:not-italic focus:border-red-600 placeholder:font-light placeholder:italic"/>
            </form>
        </div>
    )
};