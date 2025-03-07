import Image from "next/image"
import organicReach3 from '../../../public/Organicreach3.png'
import homemimg from '../../../public/homem.png'
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'




export function About() {
    return(
        <section className="bg-[#ddc8b8] py-16">
            <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-12" 
                data-aos="zoom-out-top"
                data-aos-delay="500">
                    OrganicReach Rewards
            </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div 
                        className="relative" 
                    >

                        <div className="relative w-full h-[700px]  overflow-hidden" data-aos="fade-up-right"
                        data-aos-delay="500">
                            <Image
                                src={organicReach3}
                                alt="Foto do cachorro"
                                fill
                                quality={100}
                                priority
                                className="object-cover hover:scale-200 duration-300"
                            />
                        </div>

                    </div>

                    <div 
                        className="space-y-6 mt-10" 
                        data-aos="fade-up-left"
                        data-aos-delay="500"
                    >
                        <h2 className="text 4xl font-bold">SOBRE</h2>
                        <p>O OrganicReach Rewards é uma solução inovadora para programas de fidelidade, baseada no crescimento orgânico e na publicidade feita pelos próprios clientes. Em vez de utilizar cartões físicos ou aplicativos, o sistema transforma Stories, Posts e Reels no Instagram em selos de fidelidade.<br/>

                        Os clientes de um estabelecimento simplesmente postam conteúdos sobre o local, e cada postagem funciona como um "carimbo". Quando atingem um determinado número de publicações, ganham recompensas definidas pelo próprio negócio.</p>

                        <h2 className="text 4xl font-bold">Por que esse modelo é inovador?</h2>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                <span>
                                    <strong>Dispensa cartões físicos e aplicativos:</strong> Nada de carregar cartões ou baixar apps.
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                <span>
                                    <strong>Publicidade autêntica e gratuita:</strong>  Clientes promovem o local de maneira espontânea.
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                <span>
                                    <strong>Crescimento orgânico:</strong> A divulgação ocorre de forma natural, através das redes sociais.
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                <span>
                                    <strong>Fácil implementação:</strong> O sistema será integrado às ferramentas que os negócios já utilizam.
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                <span>
                                    <strong>Modelo Micro SaaS acessível:</strong> O serviço será oferecido por apenas $10/mês, com os primeiros seis meses no plano premium.
                                </span>
                            </li>
                        </ul>

                        
                    </div>

                </div>

            </div>
        </section>
    )
}