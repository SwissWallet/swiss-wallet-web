import { useNavigate } from 'react-router';
import { MainButton } from '../micro-components/main-button';
import RowTable from './colum-row';
import { HeaderOnPages } from "./header-on-the-pages";
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';

interface productInterface{
    id: string,
    name: string,
    value: number,
    description: string,
    image: string,
    category: string,
}

export default function ListProduct() {

    const navigate = useNavigate();

    
    function click(){
        navigate('/add-product')
    }
    
    const product = {
        id: "",
        name: "",
        value: "",
        description: "",
        image: "data:image/jpeg;base64,",
        category: "",
    }
    const [ productList, setProductList ] = useState([product]);
    
    useEffect(() => {
        async function getProducts(){
            await api.get(`/v3/products`)
            .then((json) => {
                const data = json.data;
                setProductList(data.map((item: productInterface) => ({
                    id: item.id,
                    name: item.name,
                    value: item.value,
                    description: item.description,
                    image: `data:image/jpeg;base64,${item.image}`,
                    category: item.category
                })))
            })
        }
        getProducts();
    }, [])

    return (
        <>
            <div className="m-12">
                <HeaderOnPages 
                    title="Lista de Produtos" 
                    description="Adicione produtos ou remova itens do site"
                    element={<MainButton width='min' onClick={click}>Novo Produto</MainButton>}
                />
            </div>
            <main className="bg-white shadow-lg m-12 flex flex-col justify-between rounded-3xl">
                {/* titulo */}
                <div className="flex justify-between p-12 items-center gap-8 text-2xl font-bold">
                    <h4>Imagem</h4>
                    <h4 className="w-1/4">Titulo</h4>
                    <h4 className="">Valor</h4>
                    <h4 className="">Selecione</h4>
                </div>
                    {productList.map((product) => (
                            <div key={product.id}>
                                <RowTable
                                    title={product.name}
                                    value={product.value}
                                    image={product.image}
                                />
                            </div>
                        ))}
            </main>
        </>
    )
}