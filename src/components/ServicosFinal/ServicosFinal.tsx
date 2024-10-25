import { useEffect, useRef, useState } from "react"
import Fatia from "../Fatia/Fatia"
import medida from "../../assets/images/medida.svg"
import nivel from "../../assets/images/nivel.svg"
import corte from "../../assets/images/corte.svg"
import marteletes from "../../assets/images/martelete.svg"
import esmerilhadeira from "../../assets/images/esmerilhadeira.svg"
import andaime from "../../assets/images/andaime.svg"
import trabManuais from "../../assets/images/trabManuais.svg"
import setaServicos from "../../assets/images/setaServicos (1).svg"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Props = {
    cliqueOrcamento: () => void
}

export default function ServicosFinal({cliqueOrcamento}: Props){

    const servicos = [
        {nome: "Instrumentos de Medição", img: medida},
        {nome: "Prumos e Níveis", img: nivel},
        {nome: "Máquinas de Corte, Serra e Plainas", img: corte},
        {nome: "Marteletes e Britadeiras", img: marteletes},
        {nome: "Esmerilhadeira, Lixadeira e Furadeira", img: esmerilhadeira},
        {nome: "Andaimes", img: andaime},
        {nome: "Ferramentas Manuais", img: trabManuais},
    ]


    const [petalaAtual, setPetalaAtual] = useState<number>(0)
    const [clicouDireita, setClicouDireita] = useState<boolean>(false)
    const [clicouEsquerda, setClicouEsquerda] = useState<boolean>(false)

    const containerPetalas = useRef(null)


    {/* Nome das animações: rotação 1 é a rotação pro lado oposto ao movimento que acontece antes, rotação 2 é a rotação para o lado real do movimento, Pet1 é petala 1, Pet2 petala2 .... */}

    const cliqueDireita = () => {  

        setClicouDireita(true)
    }

    const cliqueEsquerda = () => {  

        setClicouEsquerda(true)
    }

    useEffect(() => {
        setPetalaAtual(0)
    }, [])



    return (
        <div className="flex justify-center   overflow-hidden">
            <div ref={containerPetalas} className=" relative w-[100vw] h-screen flex flex-col overflow-hidden">
                <div className="absolute top-[30%] bottom-0 left-0 right-0 [background:linear-gradient(to_top,#fffeee_65%,transparent)]  z-50 lg:flex hidden"></div>
                <div onClick={cliqueOrcamento} className="absolute lg:top-[80%] top-[75%] p-4 rounded-lg bg-[#fffeee] px-[50px] border-2 border-amareloPrincipal cursor-pointer text-center text-black italic lg:left-[35%] left-8 lg:right-[35%] right-8 z-[1000000] [box-shadow:4px_4px_0px_#fbca01]">
                    Fazer orçamento de serviço
                </div>
                <div className="text-3xl text-[#363633] font-Spectral lg:pt-12 pt-36 mb-12 text-center font-bold">
                    Confira nossa Paleta de Serviços
                </div>
                {/*<img className="h-[50vh] w-auto origin-bottom" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[40deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[80deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[120deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[160deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[200deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[240deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[280deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[320deg]" src={petala} alt="" />*/}

                    
                <div className="flex-1 flex justify-center  relative">
                    <div className="absolute top-[15%] bottom-0 left-0 right-0 [background:linear-gradient(to_top,#fffeee_80%,transparent)] z-50 lg:hidden"></div>
                    <div onClick={cliqueEsquerda} className="absolute left-4 top-[38%] p-4  rounded-xl bg-[#fffeee] border-2 border-cinzaPrincipal cursor-pointer z-[60] lg:hidden">
                        <img className="rotate-180 w-12 relative z-[60] h-auto" src={setaServicos} alt="sds" />
                    </div>
                    <div onClick={cliqueDireita} className="absolute right-4 top-[38%] p-4  rounded-xl bg-[#fffeee] border-2 border-cinzaPrincipal cursor-pointer z-[60] lg:hidden">
                        <img className="w-12 h-auto object-cover" src={setaServicos} alt="" />
                    </div>
                    <div className="flex relative items-center">
                        <div onClick={cliqueEsquerda} className="z-[60] p-4 border-2 border-[#363633] cursor-pointer rounded-xl  translate-y-[50%] lg:flex hidden">
                            <img className="rotate-180 w-12 relative z-[60] h-auto" src={setaServicos} alt="sds" />
                        </div>
                    </div>
                    <div className="relative flex justify-center lg:items-center items-start h-[80vh] aspect-square">
                        {
                            servicos.map((item, index) => {
                                return <Fatia servico={item.nome} img={item.img} lengthServ={servicos.length} index={index} petalaAtual={petalaAtual} containerPetalas={containerPetalas} clicouDireita={clicouDireita} clicouEsquerda={clicouEsquerda} setClicouDireita={setClicouDireita} setClicouEsquerda={setClicouEsquerda}/>
                            })
                        }
                    </div>
                    <div className="flex relative items-center">
                        <div onClick={cliqueDireita} className="z-[60] p-4 border-2 border-[#363633] cursor-pointer rounded-xl  translate-y-[50%] lg:flex hidden">
                            <img className="w-12 h-auto object-cover" src={setaServicos} alt="" />
                        </div>
                    </div>
                </div>

                <div>

                </div>
                
            </div>
            <div className="w-[0vw]  flex justify-center items-center">

            </div>
        </div>
    )
}