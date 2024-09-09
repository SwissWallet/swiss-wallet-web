import Cloud      from '../../assets/images/cloud.svg'
import { MainButton } from '../micro-components/main-button'
import { UserInput } from '../micro-components/user-input'
import { HeaderOnPages } from './header-on-the-pages'
    
export function AddNewProduct() {
    return (
        <div className='m-12'>
            <HeaderOnPages 
                title='Adicionar Produto' 
                description='Adicione produtos no catálogo do site'
                notFilterAndOrder={true}
            />
            
            <main className='flex items-center justify-around mt-20'>
                <button className=' flex flex-col gap-20 hover:bg-zinc-100 bg-white shadow-xl p-16 w-2/4 h-[440px] items-center text-center rounded-xl'>
                    <p className='text-2xl'>Adicione a foto do produto</p>
                    <img src={Cloud}  className='w-20'/>
                </button>
                <div className='flex flex-col gap-5 w-2/4 justify-between p-12'>
                    <UserInput>Titulo</UserInput>
                    <UserInput type='number'>Valor</UserInput>
                    <UserInput>Categoria</UserInput>
                    <UserInput>Descrição</UserInput>
                </div>
            </main>
            <section className='flex justify-center mt-10'>
                <MainButton>Salvar Produto</MainButton>
            </section>
        </div>
    )
}