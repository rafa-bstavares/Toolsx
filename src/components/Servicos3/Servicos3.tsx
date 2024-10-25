//import { useLayoutEffect, useRef, useState } from "react"
//import petala from "../../assets/images/petalaServicos.svg"
//import petala2 from "../../assets/images/petalaServicos2.svg"
//import Petala3 from "../Petala3/Petala3"
//import gsap from "gsap"
//import ScrollTrigger from "gsap/ScrollTrigger"

//gsap.registerPlugin(ScrollTrigger)

export default function Servicos3(){

    return (
        <div>

        </div>
    )

   /* const servicos = [
        {nome: "servico"},
        {nome: "servico"},
        {nome: "servico"},
        {nome: "servico"},
        {nome: "servico"},
        {nome: "servico"},
        {nome: "servico"},
        {nome: "servico"},
        {nome: "servico"}
    ]


    const [petalaAtual, setPetalaAtual] = useState<number>(0)
    const [petalaDireita, setPetalaDireita] = useState(1)
    const [petalaEsquerda, setPetalaEsquerda] = useState(servicos.length - 1)
    const [clicouDireita, setClicouDireita] = useState<boolean>(false)
    const [clicouEsquerda, setClicouEsquerda] = useState<boolean>(false)

    const containerPetalas = useRef(null)


    { Nome das animações: rotação 1 é a rotação pro lado oposto ao movimento que acontece antes, rotação 2 é a rotação para o lado real do movimento, Pet1 é petala 1, Pet2 petala2 .... }

    const cliqueDireita = () => {  

        setClicouDireita(true)
    }

    const cliqueEsquerda = () => {  

        setClicouEsquerda(true)
    }

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            servicos.forEach((item, index) => {

                const angRotate = 40 * index

                gsap.to(`.petala${index}`, {
                    scrollTrigger:{
                        trigger: containerPetalas.current,
                        start: "50% bottom",
                        toggleActions: "play none none reverse"
                    },
                    rotate: `${angRotate}deg`,
                    duration: 1
                }  
            )
                
            })




        })

        return () => context.revert()
    }, [])


    return (
        <div className="flex justify-center py-[100px] px-[50px]">
            <div ref={containerPetalas} className="containerPetalas relative w-[50vw] h-screen flex flex-col">
                {<img className="h-[50vh] w-auto origin-bottom" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[40deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[80deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[120deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[160deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[200deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[240deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[280deg]" src={petala} alt="" />
                <img className="absolute left-0 bottom-0 h-[50vh] w-auto origin-bottom rotate-[320deg]" src={petala} alt="" />}

                    
                    <div>
                        {
                            servicos.map((item, index) => {
                                return <Petala3 lengthServ={servicos.length} index={index} petalaAtual={petalaAtual} containerPetalas={containerPetalas} clicouDireita={clicouDireita} clicouEsquerda={clicouEsquerda} setClicouDireita={setClicouDireita} setClicouEsquerda={setClicouEsquerda}/>
                            })
                        }
                    </div>

                    <div className="flex">

                    </div>
                
            </div>
            <div className="w-[50vw] bg-red-600 flex justify-center items-center">
                <div onClick={cliqueEsquerda} className="p-4 bg-white">esquerda</div>
                <div onClick={cliqueDireita} className="p-4 bg-white">direita</div>
            </div>
        </div>
    )*/
}