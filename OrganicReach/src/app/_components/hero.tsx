import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import hero1 from '../../../public/hero1.jpg'
import Image from 'next/image'
import { Crown } from 'lucide-react'


export function Hero(){
    return(
        <section className="relative text-white overflow-hidden bg-[url('/hero1.jpg')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-40">

            
            <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>


                    <div className='mb-4 space-y-6'>
                        <h1 
                            data-aos="zoom-out-down"
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                            Transforme seus clientes em divulgadores da sua marca!
                        </h1>
                        <p 
                            data-aos="zoom-out-right"
                            className="lg:text-lg">
                            Seu programa de fidelidade, sem cartões ou apps. Cada post no Instagram vira um selo. Recompense clientes e conquiste novos, sem esforço.
                        </p>
                            <a 
                                data-aos="zoom-out-top"
                                data-aos-delay="500"
                                href='#'
                                className=" hover:bg-opacity-100 bg-[#2c6ed2] bg-opacity-80 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                            >
                            <Crown className='w-5 h-5'/>
                            Experimente GRÁTIS por <b className="bg-green-500 text-black px-2 py-1 rounded-md">6 meses</b> 
                                
                            </a>
                        
                    </div>
                    
                    

                </article>

            </div>

        </section>
    )
}