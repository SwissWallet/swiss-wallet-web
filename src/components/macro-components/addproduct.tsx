import { UploadCloudIcon, X } from 'lucide-react'
import { MainButton } from '../micro-components/main-button'
import { UserInput } from '../micro-components/user-input'
import { HeaderOnPages } from './header-on-the-pages'
import { useCallback, useState } from 'react'
import { DropzoneState, useDropzone } from 'react-dropzone'
import { api } from '../../lib/axios'

interface InputImageProps{
    dropzone: DropzoneState;
}

interface HasImageProps {
    file: File | null;
    removeFile: () => void;
}
    
export function AddNewProduct() {

    const [ file, setFile ] = useState<File | null>(null);
    const [ name, setName ] = useState("");
    const [ value, setValue ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ category, setCategory ] = useState("");

    const onDrop = useCallback((files: File[]) => {
        setFile(files[0]);
    }, []);

    const removeFile = () => {
        setFile(null);
    }

    const dropzone = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [".jpg", ".jpeg", ".png"],
        }
    });

    

    async function newProduct() {

        if(!file){
            return
        };

        const productData = {
            name,
            value,
            description,
            category
        };

        console.log(file)

        const productDatas = new FormData();
        productDatas.append("createDto", JSON.stringify(productData));
        productDatas.append("image", file);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };


        await api.post('v3/products', productDatas, config)
        .then(() => {
            console.log("sucessfull")
        })
        .catch((err) => {
            console.log(err)
        })
    };


    return (
        <div className='m-12'>
            <HeaderOnPages 
                title='Adicionar Produto' 
                description='Adicione produtos no catálogo do site'
                notFilterAndOrder={true}
            />
            
            <main className='flex items-center justify-around mt-20'>
                
                {!file ? (<InputImage dropzone={dropzone} />) : (<HasImage file={file} removeFile={removeFile}/>)}
                

                <form className='flex flex-col gap-5 w-2/4 justify-between p-12'>
                    <UserInput type='text' placeholder='Ex: Camiseta Branca' onChange={(e) => setName(e.target.value)} >Titulo</UserInput>
                    <UserInput type='number' placeholder='Ex: 40,00' onChange={(e) => setValue(e.target.value)} >Valor</UserInput>
                    <UserInput type='text' placeholder='Ex: STORE' onChange={(e) => setCategory(e.target.value)} >Categoria</UserInput>
                    <UserInput type='text' placeholder='Camiseta Branca Básica' onChange={(e) => setDescription(e.target.value)} >Descrição</UserInput>
                </form>
            </main>
            <section className='flex justify-center mt-10'>
                <MainButton onClick={newProduct}>Salvar Produto</MainButton>
            </section>
        </div>
    )
};

const InputImage = ({dropzone}: InputImageProps) => {
    return(
        <div 
        {...dropzone.getRootProps()}
        className='hover:cursor-pointer flex flex-col gap-20 hover:bg-zinc-100 bg-white shadow-xl p-16 w-2/4 h-[440px] items-center text-center rounded-xl'>
            <label className={`text-2xl ${dropzone.isDragActive ? "text-red-700" : "text-gray-500"} `}>Adicione a foto do produto</label>
            <UploadCloudIcon className={`size-20 ${dropzone.isDragActive ? "text-red-700" : "text-gray-500"}`}/>
            <input {...dropzone.getInputProps()} className="hidden"/>
        </div>
    )
};

const HasImage = ({file, removeFile}: HasImageProps) => {

    const previewUrl = file ? URL.createObjectURL(file) : '';

    return(
        <div className='text-zinc-500  flex flex-col hover:bg-zinc-100 bg-white shadow-xl p-5 gap-1 w-2/4 h-[440px] rounded-xl'>
            <button onClick={removeFile} className='w-full h-auto flex justify-end'><X className='size-5' /></button>
            {previewUrl && (
                <img
                    src={previewUrl}
                    alt="Prévia da Imagem"
                    className="max-w-full max-h-full object-cover rounded flex-1"
                />
            )}
        </div>
    )
}