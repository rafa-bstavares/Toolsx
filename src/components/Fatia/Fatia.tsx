import { Dispatch, RefObject, SetStateAction, useEffect, useLayoutEffect, useRef, useState } from "react"
import petala2 from "../../assets/images/fatia7Cinza (2).svg"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

type Props = {
    index: number,
    petalaAtual: number,
    containerPetalas: RefObject<HTMLDivElement>,
    clicouDireita: boolean,
    setClicouDireita: Dispatch<SetStateAction<boolean>>,
    clicouEsquerda: boolean,
    setClicouEsquerda: Dispatch<SetStateAction<boolean>>,
    lengthServ: number,
    img: string,
    servico: string
}


gsap.registerPlugin(useGSAP)

export default function Fatia({index, petalaAtual, clicouDireita,  clicouEsquerda, setClicouDireita, containerPetalas, setClicouEsquerda, img, servico}: Props){


    const [zIndex, setZIndex] = useState<number>(10)
    const [petala, setPetala] = useState<number>(index)

    const petalaa = useRef(null) 
    const petalaMascara = useRef(null) 
    const iconeServico = useRef(null) 
    const txtServico = useRef(null) 

    useEffect(() => {
        if(clicouDireita){
            const tl0 = gsap.timeline()
            const tl1 = gsap.timeline()
            const tl2 = gsap.timeline()
            const tl3 = gsap.timeline()
            const tl4 = gsap.timeline()
            const tl5 = gsap.timeline()
            const tl6 = gsap.timeline()

            switch(petala){

                case 6:
                    tl6.to(petalaa.current, {
                        rotate: "257.15deg",
                        onComplete: () => setPetala(5)
                    }).to(iconeServico.current, {scale: 1}, "<")
                    break

                case 5:
                    tl5.to(petalaa.current, {
                        rotate: "205.72deg",
                        onComplete: () => setPetala(4)
                    }).to(iconeServico.current, {scale: 1}, "<")
                    break

                case 4:
                    tl4.to(petalaa.current, {
                        rotate: "154.29deg",
                        onComplete: () => setPetala(3)
                    }).to(iconeServico.current, {scale: 1}, "<")
                    break


                case 3:
                    tl3.to(petalaa.current, {
                        rotate: "102.86deg",
                        onComplete: () => setPetala(2)
                    }).to(iconeServico.current, {scale: 1}, "<")
                    break

                case 2:
                    tl2.to(petalaa.current, {
                        rotate: "51.43deg",
                        onComplete: () => setPetala(1)
                    }).to(iconeServico.current, {scale: 1}, "<")
                    break

                case 1:
                    tl1.to(petalaa.current, {
                        rotate: "0deg",
                        scale: 1.1,
                        onComplete: () => setPetala(0)
                    }).to(iconeServico.current, {scale: 3}, "<").fromTo(txtServico.current, {opacity:0}, {opacity: 1}, "<")
                    gsap.to(petalaMascara.current, {
                        opacity: 0
                    })
                    break

                case 0: 

                    tl0.fromTo(petalaa.current, {rotate: "360deg"}, {
                        rotate: "308.58deg",
                        scale: 1,
                        onComplete: () => setPetala(6)
                    }).to(iconeServico.current, {scale: 1}, "<").fromTo(txtServico.current, {opacity:1}, {opacity: 0}, "<")
                    gsap.to(petalaMascara.current, {
                        opacity: 40
                    })


                    break
            }

            setClicouDireita(false)
        }
    }, [clicouDireita])

    useEffect(() => {
        if(clicouEsquerda){
            const tl0 = gsap.timeline()
            const tl1 = gsap.timeline()
            const tl2 = gsap.timeline()
            const tl3 = gsap.timeline()
            const tl4 = gsap.timeline()
            const tl5 = gsap.timeline()
            const tl6 = gsap.timeline()

            switch(petala){

                case 6:
                    tl6.to(petalaa.current, {
                        rotate: "360deg",
                        scale: 1.1,
                        onComplete: () => setPetala(0)
                    }).to(iconeServico.current, {scale: 3}, "<").fromTo(txtServico.current, {opacity:0}, {opacity: 1}, "<")
                    break

                case 5:
                    tl5.to(petalaa.current, {
                        rotate: "308.58deg",
                        onComplete: () => setPetala(6)
                    }).to(iconeServico.current, {scale: 1}, "<")
                    break

                case 4:
                    tl4.to(petalaa.current, {
                        rotate: "257.15deg",
                        onComplete: () => setPetala(5)
                    }).to(iconeServico.current, {scale: 1}, "<")
                    break


                case 3:
                    tl3.to(petalaa.current, {
                        rotate: "205.72deg",
                        onComplete: () => setPetala(4)
                    }).to(iconeServico.current, {scale: 1}, "<")
                    break

                case 2:
                    tl2.to(petalaa.current, {
                        rotate: "154.29deg",
                        onComplete: () => setPetala(3)
                    }).to(iconeServico.current, {scale: 1}, "<")
                    break

                case 1:
                    tl1.to(petalaa.current, {
                        rotate: "102.86deg",
                        onComplete: () => setPetala(2)
                    }).to(iconeServico.current, {scale: 1}, "<")
                    break

                case 0: 

                    tl0.fromTo(petalaa.current, {rotate: "0deg"},{
                        rotate: "51.43deg",
                        scale: 1,
                        onComplete: () => setPetala(1)
                    }).to(iconeServico.current, {scale: 1}, "<").fromTo(txtServico.current, {opacity:1}, {opacity: 0}, "<")
                    gsap.to(petalaMascara.current, {
                        opacity: 40
                    })


                    break
            }


            setClicouEsquerda(false)
        }
    }, [clicouEsquerda])



    useLayoutEffect(() => {
        const context = gsap.context(() => {

                const angRotate = 51.43 * index
                let escala



                gsap.to(petalaa.current, {
                        scrollTrigger:{
                            trigger: containerPetalas.current,
                            start: "50% bottom"
                        },
                        rotate: `${angRotate}deg`,
                        scale: escala,
                        duration: 0.5
                    }
                )

                if(petala == 0){
                    gsap.to(iconeServico.current, {scale: 3})
                    gsap.to(txtServico.current, {opacity: 80})
                }
            
                




        })

        return () => context.revert()
    }, [])



    useEffect(() => {

        if(index == petalaAtual){
            setZIndex(20)
        }
    }, [])


    return (
        <div ref={petalaa} className={`petala${index} absolute flex justify-center items-center left-1/2 lg:bottom-[18vh] bottom-[45vh] lg:h-[60%] h-[50vw] lg:max-h-none max-h-[30%] z-${zIndex} -translate-x-1/2 w-96 origin-bottom`}>
            <div className="flex flex-col justify-center items-center h-full w-fit relative"> {/* Se tirar o flex justicenter itemcenter daqui fica tipo uma lente de camera abrindo */}
                <div ref={txtServico} className="absolute -top-12 -translate-y-full opacity-0 text-center italic w-[150%]">{servico}</div>
                <img className=" object-cover h-full w-auto -translate-y-8" src={petala2} alt="" />
                <div className="absolute top-5 left-1/2 -translate-x-1/2">
                    <img ref={iconeServico} className="w-5 aspect-square object-cover" src={img} alt="icone serviço" />
                </div>
            </div>
        </div>
    )
}