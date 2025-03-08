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
            className="bg-[#ecf2fb] py-16">
            <div 
                            data-aos="zoom-out-top"
                            className="container mx-auto px-4 ">
            
                            
                            <h2 className="text-3xl font-bold text-center mb-12 ">Planos e Preços</h2>
            
                            <div className="relative max-w-4xl mx-auto flex justify-center items-center">
            
                                <div className='overflow-hidden' ref={emblaRef}>
                                    <div className='flex'>
                                        {services.map((item, index) => (
                                            <div key={index} className='flex-[0_0_100%] min-w-0 px-3 justify-center'>
                                                <article className='bg-[#495168] bg-opacity-80 text-black p-6 space-y-4 flex flex-col'>
                                                    <div className=' flex flex-col items-center text-center space-y-4'>
                                                        <div className=' align-center justify-center relative w-24 h-24'>

                                                            <p className='font-bold text-4xl'>{item.icon}</p>
                                                        </div>
                                                        

                                                        <div className='bg-[#495168] p-4 rounded-2xl'>
                                                        <p className='text-white select-none text-2xl font-bold'>{item.title}</p>
            
                                                        <div>
                                                            <p className='text-sm text-white underline underline-offset-4'>{item.description1}</p>
                                                            <p className='text-sm text-white'>{item.description2}</p>
                                                            <p className='text-sm text-white '>{item.description3}</p>
                                                            
                                                        </div>

                                                        

                                                        </div>
                                                        <a 
                                                            data-aos="zoom-out-top"
                                                            data-aos-delay="500"
                                                            href='#'
                                                            className=" hover:bg-yellow-600 bg-yellow-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                                                        >
                                                        Venha fazer parte!!
                                                            
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