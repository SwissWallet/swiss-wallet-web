import backIcon from '../../assets/images/backicon.svg'
import Cloud from '../../assets/images/cloud.svg'


export default function AddNewProduct() {
    return (
        <>
            <header className="flex justify-between p-12 items-center">
                <div>
                    <h1 className="font-bold text-5xl" >Adicionar Produtos</h1>
                    <p className="font-medium text-2xl italic mt-2" >Adicione produtos no catálogo do site</p>
                </div>
                <img src={backIcon} />
            </header>
            <main className='flex gap-20'>
                <div className=' flex flex-col gap-20 bg-white shadow-xl p-16 m-14 w-[800px] h-[600px] items-center text-center rounded-xl'>
                    <p className='text-2xl'>Adicione a foto do produto</p>
                    <img src={Cloud} />
                </div>
                <div className='flex flex-col gap-12 w-1/4'>
                    <label htmlFor="title" className='font-bold text-2xl'>Titulo</label>
                    <input type="text" name="title" id="title" className='border-b-2 border-black w-full h-10' />
                    <label htmlFor="price" className='font-bold text-2xl'>Valor</label>
                    <input type="number" name="price" id="price" className='border-b-2 border-black w-full h-10' />
                    <label htmlFor="category" className='font-bold text-2xl'>Categoria</label>
                    <input type="text" name="category" id="category" className='border-b-2       border-black w-full h-10' />
                    <label htmlFor="description" className='font-bold text-2xl'>Descrição</label>
                    <input type="text" name="description" id="description" className='border-b-2 border-black w-full h-10' />
                </div>
            </main>
            <section className='flex justify-between m-12'>
                <button className="p-6 px-24 text-white font-bold rounded-3xl bg-red-700">Carregar Imagem</button>
                <button className="p-6 px-24 text-white font-bold rounded-3xl bg-red-700">Editar produto</button>
                <button className="p-6 px-24 text-white font-bold rounded-3xl bg-red-700">Salvar produto</button>
            </section>
        </>
    )
}