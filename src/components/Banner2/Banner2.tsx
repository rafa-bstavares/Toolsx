import imgSolucoes from "../../assets/images/iconeVarinha.svg"
import imgRapida from "../../assets/images/iconeRapida.svg"
import capacete from "../../assets/images/capacete.svg"
import martelo from "../../assets/images/martelo.svg"
import pincel from "../../assets/images/pincel.svg"
import britadeira from "../../assets/images/britadeira.svg"
import cerrote from "../../assets/images/cerrote.svg"
import ferramentas from "../../assets/images/ferramentas.svg"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)


export default function Banner2(){


    const vw = (coef: number) => window.innerWidth * (coef/100);

    useGSAP(() => {
        gsap.to(".textoForte", {
            scrollTrigger: {
                trigger: ".textoBanner2",
                start: "bottom bottom",
                toggleActions: "play none none reverse"
            },
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            stagger: {
                each: 0.3
            }
        })

        gsap.to(".elem1", {
            transformOrigin: "center bottom",
            rotation: -480,
            repeat: -1,
            duration: 14,
            ease: "linear"
        })

        gsap.to(".item1", {
            transformOrigin: "center center",
            rotation: 492,
            repeat: -1,
            duration: 14,
            ease: "linear"
        })

        gsap.to(".elem2", {
            transformOrigin: "center bottom",
            rotation: -360,
            repeat: -1,
            duration: 14,
            ease: "linear"
        })

        gsap.to(".item2", {
            transformOrigin: "center center",
            rotation: 368,
            repeat: -1,
            duration: 14,
            ease: "linear"
        })

        gsap.to(".elem3", {
            transformOrigin: "center bottom",
            rotation: -410,
            repeat: -1,
            duration: 10,
            ease: "linear"
        })

        gsap.to(".item3", {
            transformOrigin: "center center",
            rotation: 396,
            repeat: -1,
            duration: 10,
            ease: "linear"
        })

        gsap.to(".elem4", {
            transformOrigin: "center bottom",
            rotation: -550,
            repeat: -1,
            duration: 20,
            ease: "linear"
        })

        gsap.to(".item4", {
            transformOrigin: "center center",
            rotation: 552,
            repeat: -1,
            duration: 20,
            ease: "linear"
        })

        gsap.to(".elem5", {
            transformOrigin: "center bottom",
            rotation: -430,
            repeat: -1,
            duration: 8,
            ease: "linear"
        })

        gsap.to(".item5", {
            transformOrigin: "center center",
            rotation: 437,
            repeat: -1,
            duration: 8,
            ease: "linear"
        })

        gsap.to(".elem6", {
            transformOrigin: "center bottom",
            rotation: -260,
            repeat: -1,
            duration: 8,
            ease: "linear"
        })

        gsap.to(".item6", {
            transformOrigin: "center center",
            rotation: 250,
            repeat: -1,
            duration: 8,
            ease: "linear"
        })

        gsap.to(".orbitas", {
            scrollTrigger: {
                trigger: ".containerBanner2",
                start: vw(37) + " bottom",
                end: vw(10) + " top",
                scrub: 1
            },
            right: "90%",
            y: 0,
            top: "30%"
        })

        gsap.to(".orbitasMobile", {
            scrollTrigger: {
                trigger: ".containerBanner2",
                start: "-20% top",
                end: "90% bottom",
                scrub: 1
            },
            right: "100%",
            xPercent: 100,
            yPercent: -100,
            top: "80%"
        })


    })


    return (
        <div className="containerBanner2 flex flex-col lg:px-[50px] relative  lg:mt-0 -mt-[40vh]">
            <div className=" flex">
                <div className="textoBanner2 lg:mb-0 mb-24 flex flex-col text-[16px] text-black lg:w-[50vw] w-[80%] font-bold lg:pr-4 p-12 lg:pl-0 pl-[20px] lg:bg-transparent relative z-50 bg-amareloPrincipal lg:rounded-none rounded-r-2xl">
                    <div className="lg:hidden flex flex-col font-bold text-3xl mb-8 font-Spectral">As Melhores Soluções em Ferramentas para Sua Obra. <br/> <span className="text-lg font-normal opacity-70">Locação de Andaimes e Equipamentos Profissionais</span></div>
                    <div className="lg:-mt-[6vh]">
                        <span className="opacity-70 font-normal">Na</span> <span className="relative"><span className="opacity-60 text-black">ToolsX</span><span className="textoForte absolute flex justify-center items-center inset-0 opacity-100 text-black [clip-path:polygon(0%_0%,0%_0%,0%_100%,0%_100%)]">ToolsX</span></span><span className="opacity-70 font-normal">, você encontra as melhores soluções <span><img className="w-3 h-auto inline" src={imgSolucoes} alt="" /></span> para suas obras, com equipamentos de alto desempenho que garantem segurança técnica e operacional. Oferecemos</span> <span className=" relative"><span className="opacity-60 text-black">aluguel de <span className="relative"><span>ferramentas</span><span className=" textoForte lg:hidden flex justify-center items-center absolute inset-0 opacity-100 text-black [clip-path:polygon(0%_0%,0%_0%,0%_100%,0%_100%)]">ferramentas</span></span> e máquinas</span><span className=" textoForte absolute lg:flex hidden justify-center items-center inset-0 opacity-100 text-black [clip-path:polygon(0%_0%,0%_0%,0%_100%,0%_100%)]">aluguel de ferramentas e máquinas</span></span> <span className="opacity-70 font-normal">das melhores marcas do mercado, com assistência técnica especializada, seguro incluso e entrega rápida <span><img className="w-3 h-auto inline" src={imgRapida} alt="" /></span> Tudo isso com ótimos preços e condições personalizadas para o seu projeto.</span>
                    </div>
                </div>
                <div className="lg:w-[50vw]">

                    <div className="hidden lg:flex orbitas [will-change:translate,top,right] absolute w-[40vw] aspect-square top-0 -translate-y-1/3 right-0 lg:translate-x-[40%] ">
                        <div className="relative w-full h-full">
                            {/* circulos */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] aspect-square rounded-full border-solid border-2 border-black/20"></div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] aspect-square rounded-full border-solid border-2 border-black/20"></div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] aspect-square rounded-full border-solid border-2 border-black/20"></div>
                            {/* fim circulos */}

                            {/* elementos */}
                            <div className="elem1 [will-change:rotation] absolute h-[20vw] left-1/2 -translate-x-1/2 -rotate-[120deg] bottom-1/2">
                                <div className="item1 w-10 aspect-square bg-amareloPrincipal rotate-[132deg] rounded-xl flex justify-center items-center p-[6px] -translate-y-1/2 ">
                                    <img className="w-full h-full object-cover" src={capacete} alt="capacete item" />
                                </div>
                            </div>

                            <div className="elem2 [will-change:rotation] absolute h-[20vw] left-1/2 -translate-x-1/2  bottom-1/2">
                                <div className="item2 w-8 aspect-square bg-amareloPrincipal rotate-[8deg] rounded-[8px] flex justify-center items-center p-[6px] -translate-y-1/2 ">
                                    <img className="w-full h-full object-cover" src={ferramentas} alt="ferramentas item" />
                                </div>
                            </div>

                            <div className="elem3 [will-change:rotation] absolute h-[15vw] left-1/2 -translate-x-1/2 -rotate-[50deg] bottom-1/2">
                                <div className="item3 w-9 aspect-square bg-amareloPrincipal rotate-[36deg] rounded-[10px] flex justify-center items-center p-[6px] -translate-y-1/2 ">
                                    <img className="w-full h-full object-cover" src={cerrote} alt="cerrote item" />
                                </div>
                            </div>

                            <div className="elem4 [will-change:rotation] absolute h-[15vw]  left-1/2 -translate-x-1/2 -rotate-[190deg] bottom-1/2">
                                <div className="item4 w-10 aspect-square bg-amareloPrincipal rotate-[192deg] rounded-xl flex justify-center items-center p-[6px] -translate-y-1/2 ">
                                    <img className="w-full h-full object-cover" src={martelo} alt="cerrote item" />
                                </div>
                            </div>

                            <div className="elem5 [will-change:rotation] absolute h-[10vw]   left-1/2 -translate-x-1/2 -rotate-[70deg] bottom-1/2">
                                <div className="item5 w-10 aspect-square bg-amareloPrincipal rotate-[77deg] rounded-xl flex justify-center items-center p-[6px] -translate-y-1/2 ">
                                    <img className="w-full h-full object-cover" src={pincel} alt="cerrote item" />
                                </div>
                            </div>

                            <div className="elem6 [will-change:rotation] absolute h-[10vw]  left-1/2 -translate-x-1/2 rotate-[100deg] bottom-1/2">
                                <div className="item6 w-10 aspect-square bg-amareloPrincipal -rotate-[110deg] rounded-xl flex justify-center items-center p-[6px] -translate-y-1/2 ">
                                    <img className="w-full h-full object-cover" src={britadeira} alt="cerrote item" />
                                </div>
                            </div>

                        </div>
                    </div>
                    

                    <div className="lg:hidden flex orbitasMobile [will-change:translate,top,right] absolute w-[80vw] aspect-square top-0 -translate-y-1/3 right-0 lg:translate-x-[40%] ">
                        <div className="relative w-full h-full">
                            {/* circulos */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-[80vw] aspect-square rounded-full border-solid border-2 border-black/20"></div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] aspect-square rounded-full border-solid border-2 border-black/20"></div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-[40vw] aspect-square rounded-full border-solid border-2 border-black/20"></div>
                            {/* fim circulos */}

                            {/* elementos */}
                            <div className="elem1 absolute  h-[40vw] left-1/2 -translate-x-1/2 -rotate-[120deg] bottom-1/2">
                                <div className="item1 w-10 aspect-square bg-amareloPrincipal rotate-[132deg] rounded-xl flex justify-center items-center p-[6px] -translate-y-1/2 ">
                                    <img className="w-full h-full object-cover" src={capacete} alt="capacete item" />
                                </div>
                            </div>

                            <div className="elem2 absolute  h-[40vw]  left-1/2 -translate-x-1/2  bottom-1/2">
                                <div className="item2 w-8 aspect-square bg-amareloPrincipal rotate-[8deg] rounded-[8px] flex justify-center items-center p-[6px] -translate-y-1/2 ">
                                    <img className="w-full h-full object-cover" src={ferramentas} alt="ferramentas item" />
                                </div>
                            </div>

                            <div className="elem3 absolute  h-[30vw] left-1/2 -translate-x-1/2 -rotate-[50deg] bottom-1/2">
                                <div className="item3 w-9 aspect-square bg-amareloPrincipal rotate-[36deg] rounded-[10px] flex justify-center items-center p-[6px] -translate-y-1/2 ">
                                    <img className="w-full h-full object-cover" src={cerrote} alt="cerrote item" />
                                </div>
                            </div>

                            <div className="elem4 absolute  h-[30vw]  left-1/2 -translate-x-1/2 -rotate-[190deg] bottom-1/2">
                                <div className="item4 w-10 aspect-square bg-amareloPrincipal rotate-[192deg] rounded-xl flex justify-center items-center p-[6px] -translate-y-1/2 ">
                                    <img className="w-full h-full object-cover" src={martelo} alt="cerrote item" />
                                </div>
                            </div>

                            <div className="elem5 absolute  h-[20vw]   left-1/2 -translate-x-1/2 -rotate-[70deg] bottom-1/2">
                                <div className="item5 w-10 aspect-square bg-amareloPrincipal rotate-[77deg] rounded-xl flex justify-center items-center p-[6px] -translate-y-1/2 ">
                                    <img className="w-full h-full object-cover" src={pincel} alt="cerrote item" />
                                </div>
                            </div>

                            <div className="elem6 absolute  h-[20vw]  left-1/2 -translate-x-1/2 rotate-[100deg] bottom-1/2">
                                <div className="item6 w-10 aspect-square bg-amareloPrincipal -rotate-[110deg] rounded-xl flex justify-center items-center p-[6px] -translate-y-1/2 ">
                                    <img className="w-full h-full object-cover" src={britadeira} alt="cerrote item" />
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
            <div className="lg:h-[90vh] flex lg:justify-start justify-end">
                <div className="lg:w-1/2 w-0">

                </div>
                <div className="lg:w-1/2 w-[80vw] flex flex-col text-[#363633] lg:justify-center lg:pt-24 lg:pl-4 p-12  pl-[20px] lg:bg-transparent relative z-50 bg-amareloPrincipal lg:rounded-none rounded-l-2xl">
                    <div className="font-bold text-3xl mb-8 font-Spectral">
                        Conheça a Toolsx Ferramentas: Sua Parceira em Construção Civil
                    </div>
                    <div className="opacity-70 ">
                        A ToolsX surgiu para atender à necessidade dos pequenos construtores, oferecendo ferramentas e equipamentos que aceleram suas obras sem exigir grandes investimentos. Nossa solução permite que você tenha acesso a equipamentos que muitas vezes são usados apenas ocasionalmente, evitando gastos desnecessários e otimizando seus projetos.
                    </div>
                </div>
            </div>
        </div>
    )
}