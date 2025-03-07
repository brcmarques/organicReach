"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, icons, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'
import cariri from '../../../public/cariri.png'
import vitao from '../../../public/vitao.png'
import gorda from '../../../public/gorda.png'
import gordo from '../../../public/gordo.png'
import Image from 'next/image'



const testimonials = [
    {
        content: "Depois que aderi ao sistema OrganicReach Rewards, a quantidade de alunos frango na minha academia aumentou muito",
        author: "Fulano Don Deacadmia",
        role: "Dono da academia No Pain but Gain",
        image: cariri
    },
    {
        content: "Tchê da nem pra dar conta do tanto de X Salada que sai depois que aderi ao ORW, bando de pobre, nem pra comprar um X Filé",
        author: "Juriscleuson Das Comida",
        role: "Dono do Bicão X Podrão do gordo, fica no novo Milênio",
        image: gordo
    },
    {
        content: "Eu não tenho nenhuma empresa, mas adoro ver as postagens dos meus amigos para saber onde comer",
        author: "Marleia Boca Leve",
        role: "Uma gorda qualquer que eu achei",
        image: gorda
    },
    {
        content: "Mudou nada sapoha, eu já vendia muito antes e continuo vendendo muito agora, não assinem, não indico!!!!",
        author: "Vitão Barão do Café",
        role: "Rei do café da Região sul do continente Americano",
        image: vitao
    },

]

export function Testimonials(){

    const [ emblaRef, emblaApi ] = useEmblaCarousel({
        loop:true
        
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    function scrollNext(){
        emblaApi?.scrollNext();
    }

    return(
        <section
            className="bg-[#a6815b] py-16">
            <div 
                data-aos="zoom-out-top"
                className="container mx-auto px-4">

                
                <h2 className="text-3xl font-bold text-center mb-12">Depoimentos de quem já aderiu ao OrganicReach</h2>

                <div className="relative max-w-4xl mx-auto">

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {testimonials.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 px-3'>
                                    <article className='bg-[#ddc8b8] text-black rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex flex-col items-center text-center space-y-4'>
                                            <div className='relative w-24 h-24'>
                                                <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    fill
                                                    sizes='96px'
                                                    className='object-cover rounded-full'
                                                />
                                            </div>

                                            <p className='text-black-900 select-none'>{item.content}</p>

                                            <div>
                                                
                                                <p className='font-bold'>{item.author}</p>
                                                <p className='text-sm text-black-400'>{item.role}</p>

                                            </div>

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