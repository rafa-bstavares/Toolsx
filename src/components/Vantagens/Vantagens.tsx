
import flexib from "../../assets/images/iconeVersatilidade.svg"
import custoBen from "../../assets/images/iconeCustoBene.svg"
import suporte from "../../assets/images/iconeSuporte.svg"
import { useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import ItemDepoimentos from "../ItemDepoimento/ItemDepoimento"
import aspas from "../../assets/images/aspasX.svg"
import setaBaixo from "../../assets/images/setaBaixo.svg"


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

type Props = {
    cliqueOrcamento: () => void
}

export default function Vantagens({cliqueOrcamento}: Props){

    const [slideAtual, setSlideAtual] = useState(0)

    const containerVantagens = useRef(null)
    const containerDepoimentos = useRef(null)
    const containerFixoDepoimentos = useRef(null)

    const tituloL1 = "Vantagens"

    const depoimentos = [
        {depoimento: "Alugar ferramentas aqui fez toda a diferença no meu projeto! Os equipamentos chegaram em ótimo estado, e a equipe foi super atenciosa em explicar como utilizar cada item corretamente. Consegui terminar a obra no prazo e com menos gastos do que imaginei!", nome: "João F., Mestre de Obras"},
        {depoimento: "Sempre que preciso de equipamentos para minhas reformas, conto com essa empresa. A variedade de ferramentas é excelente e o atendimento é impecável. Além disso, eles são rápidos na entrega e oferecem todo o suporte necessário. Super recomendo!", nome: "Maria L., Empreiteira"},
        {depoimento: "O atendimento é diferenciado! Não precisei me preocupar com nada. A equipe me ajudou a escolher as ferramentas ideais para meu projeto e entregou tudo na data certa. Com certeza voltarei a alugar com eles para futuras obras", nome: " Pedro M., Arquiteto"},
        {depoimento: "Alugar aqui foi um grande acerto! As máquinas estavam em perfeitas condições e com um preço super acessível. Me ajudou a economizar tempo e dinheiro, além de evitar o custo de compra de ferramentas que eu só usaria uma vez.", nome: "Carlos S., Engenheiro Civil"},
        {depoimento: "A facilidade no processo de locação e a qualidade das ferramentas fizeram toda a diferença. Além disso, a equipe sempre esteve disponível para esclarecer dúvidas. Muito satisfeito com a experiência!", nome: "Fernanda A., Autônoma"}, 
    ]

    useGSAP(() => {



            
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerVantagens.current,
                start: "50% bottom",
                end: "70% bottom",
                toggleActions: "play none none reverse"
            }
        })
            
            
        
        
        
        tl.from(".texto1", {
            y: 100,
            stagger: { 
                each: 0.07 
            }
        })
            
        
                const tlPinado = gsap.timeline({
            scrollTrigger: {
                trigger: containerFixoDepoimentos.current,
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1,
                pin: containerVantagens.current
            }
        })

        tlPinado.to(containerDepoimentos.current, {
            x: 0,
            y: 1,
            rotate: 0 
        })


    })

    function esquerdaDep(){
        if(slideAtual > 0){
            setSlideAtual(slideAtual - 1)
        }
    }

    function direitaDep(){
        if(slideAtual < depoimentos.length - 2){
            setSlideAtual(slideAtual + 1)
        }
    }



    return (
        <div  className="flex flex-col text-[#fff]  relative z-[100000000] lg:bg-transparent bg-[#dbd02f]">
            <div ref={containerVantagens} className="lg:h-screen h-[130vh] bg-[#fffeee] flex flex-col px-[50px]">
                <div className="flex flex-col font-Spectral text-9xl text-black opacity-70 items-center relative lg:mb-0 mb-12">
                    3
                    <div className="absolute font-Spectral bottom-0 left-0 right-0 bg-gradient-to-t from-[#fffeee] to-transparent text-[42px] flex justify-center items-center uppercase overflow-hidden">
                    {
                        tituloL1.split("").map(item => {
                            if(item == " "){
                                return <span className="texto1">&nbsp;</span>
                            }else{
                                return <span className="texto1">{item}</span>
                            }
                            })
                    }
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="lg:flex-1 flex items-center ">
                        <div className=" flex lg:flex-row flex-col justify-between">

                            <div className="flex flex-col p-8 lg:w-[25%] w-[80vw] relative justify-between">
                                <div className="absolute left-0 top-0 border-t-2 border-l-2 border-[#363633] right-2/3 bottom-2/3 rounded-tl-xl"></div>
                                <div className="h-[2px] w-[15%] absolute top-0 right-[63%] bg-[#363633] rounded-full"></div>
                                <div className="h-[20px] w-[2px] absolute left-0 bottom-[63%] bg-[#363633] rounded-full"></div>
                                <div className="mb-12">
                                    <img className="w-1/5 h-auto" src={flexib} alt="" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-[#363633] "> 
                                        Flexibilidade
                                    </div>
                                    <div className="text-sm text-black opacity-70">
                                        Flexibilidade de uso e variedade de ferramentas
                                    </div>
                                </div>
                                <div className="absolute right-0 bottom-0 border-b-2 border-r-2 border-[#363633] left-2/3 top-2/3 rounded-br-xl"></div>
                                <div className="h-[2px] w-[15%] absolute bottom-0 left-[63%] bg-[#363633] rounded-full"></div>
                                <div className="h-[20px] w-[2px] absolute right-0 top-[63%] bg-[#363633] rounded-full"></div>
                            </div>

                            <div className="flex flex-col p-8 lg:w-[25%] w-[80vw] relative justify-between">
                                <div className="absolute left-0 top-0 border-t-2 border-l-2 border-[#363633] right-2/3 bottom-2/3 rounded-tl-xl"></div>
                                <div className="h-[2px] w-[15%] absolute top-0 right-[63%] bg-[#363633] rounded-full"></div>
                                <div className="h-[20px] w-[2px] absolute left-0 bottom-[63%] bg-[#363633] rounded-full"></div>
                                <div className="mb-12">
                                    <img className="w-1/5 h-auto" src={custoBen} alt="" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-[#363633] "> 
                                        Custo benefício
                                    </div>
                                    <div className="text-sm text-black opacity-70">
                                        Flexibilidade de uso e variedade de ferramentas
                                    </div>
                                </div>
                                <div className="absolute right-0 bottom-0 border-b-2 border-r-2 border-[#363633] left-2/3 top-2/3 rounded-br-xl"></div>
                                <div className="h-[2px] w-[15%] absolute bottom-0 left-[63%] bg-[#363633] rounded-full"></div>
                                <div className="h-[20px] w-[2px] absolute right-0 top-[63%] bg-[#363633] rounded-full"></div>
                            </div>

                            <div className="flex flex-col p-8 lg:w-[25%] w-[80vw] relative justify-between">
                                <div className="absolute left-0 top-0 border-t-2 border-l-2 border-[#363633] right-2/3 bottom-2/3 rounded-tl-xl"></div>
                                <div className="h-[2px] w-[15%] absolute top-0 right-[63%] bg-[#363633] rounded-full"></div>
                                <div className="h-[20px] w-[2px] absolute left-0 bottom-[63%] bg-[#363633] rounded-full"></div>
                                <div className="mb-12">
                                    <img className="w-1/5 h-auto" src={suporte} alt="" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-[#363633] "> 
                                        Suporte 
                                    </div>
                                    <div className="text-sm text-black opacity-70">
                                        Suporte técnico especializado e manutenção garantida
                                    </div>
                                </div>
                                <div className="absolute right-0 bottom-0 border-b-2 border-r-2 border-[#363633] left-2/3 top-2/3 rounded-br-xl"></div>
                                <div className="h-[2px] w-[15%] absolute bottom-0 left-[63%] bg-[#363633] rounded-full"></div>
                                <div className="h-[20px] w-[2px] absolute right-0 top-[63%] bg-[#363633] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 pb-4 lg:flex-none flex-1 lg:items-stretch items-center">
                        <img className="w-8 h-auto" src={setaBaixo} alt="" />
                        <div className="text-cinzaPrincipal">continue</div>
                        <img className="w-8 h-auto" src={setaBaixo} alt="" />
                    </div>
                </div>
            </div>
            <div ref={containerFixoDepoimentos} className="lg:h-auto h-screen">
                <div className="w-full h-full relative flex flex-col lg:gap-24 gap-12 justify-center items-center origin-bottom translate-x-full translate-y-full rotate-45 bg-cinzaPrincipal lg:px-[50px] px-[20px] py-[100px]" ref={containerDepoimentos}>
                    <div className="absolute top-4 left-4">
                        <img className="w-[20vw] h-auto opacity-30" src={aspas} alt="" />
                    </div>
                    <div className="text-3xl text-white font-Spectral pt-12  text-center font-bold">Depoimentos</div>
                    <div className="flex justify-end self-end gap-4">
                        <div className="p-4 bg-white rounded-xl rotate-180 cursor-pointer" onClick={esquerdaDep}>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="40" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="40" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="0207e50f11"><path d="M 15.738281 94 L 794 94 L 794 716 L 15.738281 716 Z M 15.738281 94 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#0207e50f11)"><path fill="#363633" d="M 773.371094 353.464844 L 533.824219 113.917969 C 507.363281 87.457031 462.796875 87.457031 434.941406 113.917969 L 429.371094 119.488281 C 402.910156 145.949219 402.910156 190.515625 429.371094 218.371094 L 560.285156 349.285156 L 71.445312 349.285156 C 40.808594 349.285156 15.738281 374.355469 15.738281 404.996094 C 15.738281 435.632812 40.808594 460.703125 71.445312 460.703125 L 560.285156 460.703125 L 429.371094 591.617188 C 402.910156 618.078125 402.910156 662.644531 429.371094 690.5 L 434.941406 696.070312 C 461.40625 722.53125 505.972656 722.53125 533.824219 696.070312 L 773.371094 456.523438 C 787.296875 442.597656 794.261719 423.097656 792.867188 404.996094 C 794.261719 386.890625 787.296875 367.390625 773.371094 353.464844 Z M 773.371094 353.464844 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
                        </div>
                        <div className="p-4 bg-white rounded-xl cursor-pointer" onClick={direitaDep}>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="40" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="40" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="0207e50f11"><path d="M 15.738281 94 L 794 94 L 794 716 L 15.738281 716 Z M 15.738281 94 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#0207e50f11)"><path fill="#363633" d="M 773.371094 353.464844 L 533.824219 113.917969 C 507.363281 87.457031 462.796875 87.457031 434.941406 113.917969 L 429.371094 119.488281 C 402.910156 145.949219 402.910156 190.515625 429.371094 218.371094 L 560.285156 349.285156 L 71.445312 349.285156 C 40.808594 349.285156 15.738281 374.355469 15.738281 404.996094 C 15.738281 435.632812 40.808594 460.703125 71.445312 460.703125 L 560.285156 460.703125 L 429.371094 591.617188 C 402.910156 618.078125 402.910156 662.644531 429.371094 690.5 L 434.941406 696.070312 C 461.40625 722.53125 505.972656 722.53125 533.824219 696.070312 L 773.371094 456.523438 C 787.296875 442.597656 794.261719 423.097656 792.867188 404.996094 C 794.261719 386.890625 787.296875 367.390625 773.371094 353.464844 Z M 773.371094 353.464844 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
                        </div>
                    </div>
                    <div className="self-start">
                        <div className="lg:flex hidden gap-6 transition-all duration-500 ease-linear [will-change:margin-left]" style={{marginLeft: `calc((45vw + 24px) * ${slideAtual} * -1)`}}>
                            {
                                depoimentos.map(item => <ItemDepoimentos depoimento={item.depoimento} nome={item.nome} />)
                            }
                        </div>         
                        <div className="lg:hidden flex gap-6 transition-all duration-500 ease-linear [will-change:margin-left]" style={{marginLeft: `calc((90vw + 24px) * ${slideAtual} * -1)`}}>
                            {
                                depoimentos.map(item => <ItemDepoimentos depoimento={item.depoimento} nome={item.nome} />)
                            }
                        </div>              
                    </div>
                    <div onClick={cliqueOrcamento} className="cursor-pointer lg:w-[30%] w-full p-4 rounded-lg bg-cinzaPrincipal text-center border-2 border-amareloPrincipal text-white italic lg:left-[20%] left-8 lg:right-[20%] right-8 z-[1000000] [box-shadow:4px_4px_0px_#fbca01]">
                        Explore nossa linha de produtos!
                    </div>
                </div>  
            </div>
        </div>
    )
}