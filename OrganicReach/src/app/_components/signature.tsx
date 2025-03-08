"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { Crown } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'


const services = [
    {
        title: " Plano Único: $10/mês ",
        description1: "Primeiros 6 meses grátis!",
        description2: "Suporte a múltiplos idiomas",
        description3: "Estatísticas e controle do programa",
        duration: "1h",
        price: "$50",
        icon: <Crown size={100} color='yellow'/>,
        linkText: "Olá, vi no site sobre Banho e tosa e gostaria de mais informacoes."

    },
    

]

export function Signature(){

    const [ emblaRef, emblaApi ] = useEmblaCarousel({
        loop:false,
        align: "start",
        slidesToScroll: 1,
        breakpoints:{
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    function scrollNext(){
        emblaApi?.scrollNext();
    }

    return(
        <section 
            data-aos="zoom-out-top"
            data-aos-delay="500"
            className="bg-[#ddc8b8] py-16">
            <div 
                            data-aos="zoom-out-top"
                            className="container mx-auto px-4 ">
            
                            
                            <h2 className="text-3xl font-bold text-center mb-12 ">Planos e Preços</h2>
            
                            <div className="relative max-w-4xl mx-auto flex justify-center items-center">
            
                                <div className='overflow-hidden' ref={emblaRef}>
                                    <div className='flex'>
                                        {services.map((item, index) => (
                                            <div key={index} className='flex-[0_0_100%] min-w-0 px-3 justify-center'>
                                                <article className='bg-[#6a380c] text-white p-6 space-y-4 h-full flex flex-col'>
                                                    <div className=' flex flex-col items-center text-center space-y-4'>
                                                        <div className=' align-center justify-center relative w-24 h-24'>

                                                            <p className='font-bold text-4xl'>{item.icon}</p>
                                                        </div>
                                                        

                                                        <div className='bg-[#db8c29] bg-opacity-50 p-4 rounded-2xl'>
                                                        <p className='text-gray-200 select-none text-2xl'>{item.title}</p>
            
                                                        <div>
                                                            <p className='text-sm text-gray-400'>{item.description1}</p>
                                                            <p className='text-sm text-gray-400'>{item.description2}</p>
                                                            <p className='text-sm text-gray-400'>{item.description3}</p>
                                                        </div>

                                                        

                                                        </div>
                                                        <a 
                                                            data-aos="zoom-out-top"
                                                            data-aos-delay="500"
                                                            href='#'
                                                            className=" hover:bg-red-600 bg-red-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                                                        >
                                                        <Crown className='w-5 h-5'/>
                                                        Experimente GRÁTIS por <b className="bg-green-500 text-black px-2 py-1 rounded-md">6 meses</b> 
                                                            
                                                        </a>
            
                                                    </div>
            
            
                                                </article>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                                
            
                            
                        </div>
        </section>
    )
}