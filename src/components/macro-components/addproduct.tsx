import { UploadCloudIcon, X } from 'lucide-react'
import { MainButton } from '../micro-components/main-button'
import { UserInput } from '../micro-components/user-input'
import { HeaderOnPages } from './header-on-the-pages'
import { useCallback, useState } from 'react'
import { DropzoneState, useDropzone } from 'react-dropzone'

interface InputImageProps{
    dropzone: DropzoneState;
}

interface HasImageProps {
    file: File | null;
}
    
export function AddNewProduct() {

    const [ file, setFile ] = useState<File | null>(null);

    const onDrop = useCallback((files: File[]) => {
        setFile(files[0]);
    }, []);

    const dropzone = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
        }
    });

    return (
        <div className='m-12'>
            <HeaderOnPages 
                title='Adicionar Produto' 
                description='Adicione produtos no catálogo do site'
                notFilterAndOrder={true}
            />
            
            <main className='flex items-center justify-around mt-20'>
                
                {!file ? (<InputImage dropzone={dropzone} />) : (<HasImage file={file}/>)}
                

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
};

const InputImage = ({dropzone}: InputImageProps) => {
    return(
        <div 
        {...dropzone.getRootProps()}
        className='text-zinc-500 hover:cursor-pointer flex flex-col gap-20 hover:bg-zinc-100 bg-white shadow-xl p-16 w-2/4 h-[440px] items-center text-center rounded-xl'>
            <label className='text-2xl'>Adicione a foto do produto</label>
            <UploadCloudIcon className='size-20'/>
            <input {...dropzone.getInputProps()} className="hidden"/>
        </div>
    )
};

const HasImage = ({file}: HasImageProps) => {

    const previewUrl = file ? URL.createObjectURL(file) : '';

    return(
        <div className='text-zinc-500  flex flex-col hover:bg-zinc-100 bg-white shadow-xl p-5 gap-1 w-2/4 h-[440px] rounded-xl'>
            <button className='w-full h-auto flex justify-end'><X className='size-5' /></button>
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