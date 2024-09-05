import backIcon   from '../../assets/images/backicon.svg'
import Cloud      from '../../assets/images/cloud.svg'
import { UserInput } from '../micro-components/user-input'
import { HeaderOnPages } from './header-on-the-pages'
    
export default function AddNewProduct() {
    return (
        <div className='m-12'>
            <HeaderOnPages title='Adicionar Produto' description='Adicione produtos no catálogo do site'/>
            
            <main className='flex items-center justify-around mt-20'>
                <div className=' flex flex-col gap-20 bg-white shadow-xl p-16 w-2/4 h-[440px] items-center text-center rounded-xl'>
                    <p className='text-2xl'>Adicione a foto do produto</p>
                    <img src={Cloud}  className='w-20'/>
                </div>
                <div className='flex flex-col gap-5 w-2/4 justify-between p-12'>
                    <UserInput>Titulo</UserInput>
                    <UserInput type='number'>Valor</UserInput>
                    <UserInput>Categoria</UserInput>
                    <UserInput>Descrição</UserInput>
                </div>
            </main>
            <section className='flex justify-between mt-10'>
                <button className="p-6 px-24 text-white font-bold rounded-3xl bg-red-700">Carregar Imagem</button>
                <button className="p-6 px-24 text-white font-bold rounded-3xl bg-red-700">Editar produto</button>
                <button className="p-6 px-24 text-white font-bold rounded-3xl bg-red-700">Salvar produto</button>
            </section>
        </div>
    )
}