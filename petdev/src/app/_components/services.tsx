"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, icons, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'


const services = [
    {
        title: "Banho & Tosa",
        description: "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unha, limpeza das orelhas e tosa personalizada (higienica ou estilizada).",
        duration: "1h",
        price: "$50",
        icon: <Scissors/>,
        linkText: "Olá, vi no site sobre Banho e tosa e gostaria de mais informacoes."
    },
    {
        title: "Consulta veterinaria",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quam alias nostrum, placeat expedita deserunt odit minima fugiat. Esse inventore atque minima in vel corrupti? Laboriosam eligendi cumque nemo corporis?",
        duration: "1h",
        price: "$45",
        icon: <Syringe/>,
        linkText: "Olá, vi no site sobre consulta veterinaria e gostaria de mais informacoes."
    },
    {
        title: "Táxi Pet",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti magni consequuntur officia cumque. Repellat sint quas voluptas saepe excepturi similique consequuntur quod incidunt. Dolor est omnis odio explicabo eaque quia.",
        duration: "2h",
        price: "$80",
        icon: <CarTaxiFront/>,
        linkText: "Olá, vi no site sobre Taxi Pet e gostaria de mais informacoes."
    },
    {
        title: "Hotel para pets",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempore quod praesentium optio saepe perspiciatis! Accusantium fuga excepturi amet. Sapiente soluta fugit labore perferendis consequatur mollitia dolorum, illo nesciunt culpa.",
        duration: "1h",
        price: "$60",
        icon: <Hotel/>,
        linkText: "Olá, vi no site sobre Hotel para pets e gostaria de mais informacoes."
    },

]

export function Services(){

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
            className="bg-white py-16">
            <div className="container mx-auto px-4">

                
                <h2 className="text-4xl font-bold mb-12">Servicos</h2>

                <div className="relative">

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                    <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between'>
                                            <div className='flex gap-3'>
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                                    <p className='text-gray-400 text-sm select-none'>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-4 h-4'/>
                                                <span>{item.duration}</span>
                                            </div>

                                            <a 
                                                target='_blank'
                                                href={`https://wa.me/5553991971031?text=Olá vim pelo site e gostaria de mais informacoes sobre ${item.title}!`} 
                                                className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'>
                                                <WhatsappLogo className='w-5 h-5'/>
                                                Entrar em Contato
                                            </a>

                                        </div>

                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                <button 
                    className=' bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                    onClick={scrollPrev} 
                >
                        <ChevronLeft className='w-6 h-6 text-gray-600'/>
                </button>

                <button 
                    className=' bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                    onClick={scrollNext} 
                >
                        <ChevronRight className='w-6 h-6 text-gray-600'/>
                </button>
                    
                </div>
                    

                
            </div>
        </section>
    )
}