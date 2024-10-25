
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import custoBene2 from "../../assets/images/custoBene2.jpg"
import catracas from "../../assets/images/catracas.jpg"
import ampulheta from "../../assets/images/ampulheta.jpg"

export default function Beneficios(){

    const bene1 = useRef(null)
    const bene2 = useRef(null)
    const bene3 = useRef(null)


    useGSAP(() => {

        gsap.fromTo(bene1.current, {opacity:0, xPercent: -100}, {
            scrollTrigger: {
                trigger: bene1.current,
                start: "10% bottom",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            xPercent: 0
        })

        gsap.fromTo(bene2.current, {opacity:0, xPercent: 100}, {
            scrollTrigger: {
                trigger: bene2.current,
                start: "10% bottom",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            xPercent: 0
        })

        gsap.fromTo(bene3.current, {opacity:0, xPercent: -100}, {
            scrollTrigger: {
                trigger: bene3.current,
                start: "10% bottom",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            xPercent: 0
        })


    })


    return (
<div className="px-[20px] lg:px-[50px] pb-[100px] flex flex-col bg-cinzaPrincipal">
            <div className="text-3xl text-[#fffeee] font-Spectral pt-12  text-center font-bold mb-24">Benefícios</div>
            <div className="flex lg:flex-row lg:justify-center flex-col gap-12 lg:items-stretch items-center">
                <div className="lg:w-[25vw] w-[80vw] h-auto relative bg-[#fffeee] border-2 border-cinzaPrincipal rounded-xl flex flex-col justify-center items-start p-8 [box-shadow:0px_5px_10px_#fffeee]">
                    <div className=" text-cinzaPrincipal font-bold text-lg">
                        Custo x Benefício
                    </div>
                    <div className="opacity-70 text-cinzaPrincipal text-sm mb-8">
                        Economize sem investir em ferramentas caras
                    </div>   
                    <div className="w-full aspect-[1.5] rounded-xl border-2 border-cinzaPrincipal overflow-hidden">
                        <img className="w-full h-full object-cover" src={custoBene2} alt="" />        
                    </div>             
                </div>

                <div className="lg:w-[25vw] w-[80vw] h-auto relative bg-[#fffeee] border-2 border-cinzaPrincipal rounded-xl flex flex-col justify-center items-start p-8 [box-shadow:0px_5px_10px_#fffeee]">
                    <img className="w-1/3 h-auto object-cover" src="" alt="" />
                    <div className="text-center text-cinzaPrincipal font-bold text-lg">
                        Flexibilidade
                    </div>
                    <div className="opacity-70 text-cinzaPrincipal text-sm mb-8">
                        Alugue pelo tempo necessário, sem compromissos
                    </div>    
                    <div className="w-full aspect-[1.5] rounded-xl border-2 border-cinzaPrincipal overflow-hidden">
                        <img className="w-full h-full object-cover" src={ampulheta} alt="" />        
                    </div>   
                </div>

                <div className="lg:w-[25vw] w-[80vw] h-auto relative bg-[#fffeee] border-2 border-cinzaPrincipal rounded-xl flex flex-col justify-center items-start p-8 [box-shadow:0px_5px_10px_#fffeee]">
                    <img className="w-1/3 h-auto object-cover" src="" alt="" />
                    <div className="text-center text-cinzaPrincipal font-bold text-lg">
                        Manutenção
                    </div> 
                    <div className="opacity-70 text-cinzaPrincipal text-sm mb-8">
                        A ToolsX cuida de toda a manutenção dos equipamentos
                    </div>   
                    <div className="w-full aspect-[1.5] rounded-xl border-2 border-cinzaPrincipal overflow-hidden">
                        <img className="w-full h-full object-cover" src={catracas} alt="" />        
                    </div>   
                </div>
            </div>
            <a className="self-center lg:w-[30%] w-full" target="_blank" href="https://wa.me/5511991225311">
                <div className="   mt-24 p-4 rounded-lg bg-cinzaPrincipal text-center border-2 border-amareloPrincipal text-[#fffeee] italic lg:left-[20%] left-8 lg:right-[20%] right-8 z-[1000000] [box-shadow:4px_4px_0px_#fbca01]">
                Precisa de ferramentas por pouco tempo? Alugue com a Toolsx e economize!
                </div>
            </a>
            
        </div>
    )
}