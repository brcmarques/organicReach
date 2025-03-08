"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Megaphone , Users , TrendingUp   , Zap , icons, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'


const services = [
    {
        title: "Publicidade Autêntica",
        description: "O grande diferencial do OrganicReach Rewards é transformar seus próprios clientes em divulgadores da sua marca, sem precisar pagar por anúncios ou investir em estratégias complicadas de marketing.",
        duration: "1h",
        price: "$50",
        icon: <Megaphone />,
        linkText: "Olá, vi no site sobre Publicidade Autêntica e gostaria de mais informções."
    },
    {
        title: "Criação de uma comunidade online",
        description: "Seus clientes divulgam sua marca espontaneamente ao postar sobre sua experiência, atraindo novos visitantes sem custo extra para você.",
        duration: "1h",
        price: "$45",
        icon: <Users />,
        linkText: "Olá, vi no site sobre Criação de uma comunidade online e gostaria de mais informções."
    },
    {
        title: "Aumenta o engajamento",
        description: "Cada postagem gera curtidas, comentários e compartilhamentos, ajudando seu negócio a crescer organicamente nas redes sociais e atingir um público maior.",
        duration: "2h",
        price: "$80",
        icon: <TrendingUp   />,
        linkText: "Olá, vi no site sobre Aumenta o engajamento e gostaria de mais informções."
    },
    {
        title: "Rápido e fácil de configurar",
        description: "Basta definir as regras da campanha e acompanhar as postagens. Sem burocracia, sem complicações—comece a ganhar visibilidade imediatamente!",
        duration: "1h",
        price: "$60",
        icon: <Zap />,
        linkText: "Olá, vi no site sobre ser Rápido e fácil de configurar e gostaria de mais informções."
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
            className="bg-[#ddc8b8] py-16">
            <div className="container mx-auto px-4">

                
                <h2 className="text-4xl font-bold mb-12">Benefícios para o Negócio</h2>

                <div className="relative">

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                    <article className='bg-[#495168] bg-opacity-80 text-white p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between'>
                                            <div className='flex gap-3'>
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                                    <p className='text-gray-400 text-sm select-none'>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-center'>
                                            

                                            <a 
                                                target='_blank'
                                                href={`https://wa.me/5553991971031?text=Olá vim pelo site e gostaria de mais informacoes sobre ${item.title}!`} 
                                                className='flex items-center justify-center gap-2 hover:bg-opacity-100 bg-[#2c6ed2] bg-opacity-0 px-4 py-1 rounded-md duration-300'>
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