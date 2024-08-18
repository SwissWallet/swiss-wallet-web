import logoSwiss from '../../assets/images/logo-swisswallet.png'
import { CircleHelp } from 'lucide-react'

export function HeaderLoginAndRegister(){
    return(
        <header className='flex p-5 justify-between'>
            <div className='flex items-center '>
                <img className='w-60' src={logoSwiss} alt='logo da marca' />                    
                <div className='w-[1px] h-16 bg-white' />
            </div>
            <div>
                <button>
                    <CircleHelp className='text-white hover:text-slate-300 size-10'/>
                </button>
            </div>
        </header>

    )
}