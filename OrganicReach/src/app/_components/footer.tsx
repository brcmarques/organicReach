import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'


const brands = [
    { name: "Royal Vanin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
]

export function Footer(){
    return (
        <section
            data-aos="zoom-out-top"
            className='bg-[#495168] bg-opacity-80 py-16 text-black'>
            <div className='container mx-auto px-4'>

                {/* <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    className='object-contain'
                                />
                            </div>
                        ))}
                    </div>

                </div> */}

                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-5'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Perguntas Frequentes</h3>
                        <a href="#"><p className='mb-2'>Como o sistema rastreia as postagens?</p></a>
                        <a href="#"><p className='mb-2'>Meu negócio precisa de um perfil no Instagram?</p></a>
                        <a href="#"><p className='mb-2'>Como os clientes resgatam as recompensas?</p></a>
                        <a href="#"><p className='mb-2'>É possível personalizar os prêmios?</p></a>

                        
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Suporte</h3>
                        <a target='_blank' href="https://www.instagram.com/brcmarques/"><img className='hover:w-[210px] w-[200px] h-[200px] rounded-full' src="suporte.png" alt="" />
                        <p className='hover:text-2xl font-bold'>O melhorzinho</p></a>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contato</h3>
                        <p>Email: teste@gmail.com </p>
                        <p>Telefone: (XX) 12314124123 </p>
                    </div>
                    <div>
                        <h3 className='  text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a href="#" target='_blank'><FacebookLogo className='w-8 h-8'/></a>
                            <a href="#" target='_blank'><InstagramLogo className='w-8 h-8'/></a>
                            <a href="#" target='_blank'><YoutubeLogo className='w-8 h-8'/></a>

                        </div>
                    </div>
                </footer>

            </div>

        </section>
    )
}