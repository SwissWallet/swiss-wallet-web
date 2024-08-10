import logoSwiss from '../../assets/images/logo-swisswallet.png'
import logoSenai from '../../assets/images/logo-senai.png'
import { CircleHelp } from 'lucide-react'

export function LoginPage(){
    return(
        <div className="h-screen w-full bg-red-gradient">
            
            <div className='flex p-5 justify-between'>
                <div className='flex items-center space-x-5'>
                    <img className='w-60' src={logoSwiss} alt='logo da marca' />                    
                    <div className='w-[1px] h-16 bg-white' />
                    <img className='w-[180px] h-[45px]' src={logoSenai} alt="logo senai" />
                </div>
                <div>
                    <CircleHelp className='text-white size-10'/>
                </div>
            </div>

        </div>


        
    )
}