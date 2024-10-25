import { Dispatch, RefObject, SetStateAction, useEffect, useLayoutEffect, useRef, useState } from "react"
import petala2 from "../../assets/images/petalaServicos2.svg"
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
    lengthServ: number
}


gsap.registerPlugin(useGSAP)

export default function Petala({index, petalaAtual, containerPetalas, clicouDireita,  clicouEsquerda, setClicouDireita, setClicouEsquerda}: Props){


    const [zIndex, setZIndex] = useState<number>(10)
    const [petala, setPetala] = useState<number>(index)

    const petalaa = useRef(null) 
    const petalaMascara = useRef(null) 

    useEffect(() => {
        if(clicouDireita){
            const tl0 = gsap.timeline()
            const tl1 = gsap.timeline()
            const tl2 = gsap.timeline()
            const tl3 = gsap.timeline()
            const tl4 = gsap.timeline()
            const tl5 = gsap.timeline()
            const tl6 = gsap.timeline()
            const tl7 = gsap.timeline()
            const tl8 = gsap.timeline()


                switch(petala){

                case 8: 
                    tl8.to(petalaa.current, {
                        rotate: "240deg",
                        onComplete: () => {setZIndex(20)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "360deg",
                        onComplete: () => setPetala(0)
                    })
                    gsap.to(petalaMascara.current, {
                        opacity: 0
                    })
                    break

                case 7:
                    tl7.to(petalaa.current, {
                        rotate: "210deg",//280 35
                        onComplete: () => {setZIndex(20)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "320deg",
                        onComplete: () => setPetala(8)
                    })
                    break

                case 6:
                    tl6.to(petalaa.current, {
                        rotate: "180deg",
                        onComplete: () => {setZIndex(20)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "280deg",
                        onComplete: () => setPetala(7)
                    })
                    break

                case 5:
                    tl5.to(petalaa.current, {
                        rotate: "150deg",
                        onComplete: () => {setZIndex(20)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "240deg",
                        onComplete: () => setPetala(6)
                    })
                    break

                case 4:
                    tl4.to(petalaa.current, {
                        rotate: "120deg",
                        onComplete: () => {setZIndex(20)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "200deg",
                        onComplete: () => setPetala(5)
                    })
                    break


                case 3:
                    tl3.to(petalaa.current, {
                        rotate: "90deg",
                        onComplete: () => {setZIndex(20)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "160deg",
                        onComplete: () => setPetala(4)
                    })
                    break

                case 2:
                    tl2.to(petalaa.current, {
                        rotate: "60deg",
                        onComplete: () => {setZIndex(20)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "120deg",
                        onComplete: () => setPetala(3)
                    })
                    break

                case 1:
                    tl1.to(petalaa.current, {
                        rotate: "30deg",
                        onComplete: () => {setZIndex(20)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "80deg",
                        onComplete: () => setPetala(2)
                    })
                    break

                case 0: 

                    tl0.fromTo(petalaa.current, {rotate: "0deg"}, {
                        rotate: "-50deg",
                        onComplete: () => {setZIndex(10)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "40deg",
                        onComplete: () => setPetala(1)
                    })
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
            const tl7 = gsap.timeline()
            const tl8 = gsap.timeline()


                switch(petala){

                case 8: 
                    tl8.to(petalaa.current, {
                        rotate: "330deg",
                        onComplete: () => {setZIndex(10)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "280deg",
                        onComplete: () => setPetala(7)
                    })
                    break

                case 7:
                    tl7.to(petalaa.current, {
                        rotate: "300deg",//280 35
                        onComplete: () => {setZIndex(10)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "240deg",
                        onComplete: () => setPetala(6)
                    })
                    break

                case 6:
                    tl6.to(petalaa.current, {
                        rotate: "270deg",
                        onComplete: () => {setZIndex(10)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "200deg",
                        onComplete: () => setPetala(5)
                    })
                    break

                case 5:
                    tl5.to(petalaa.current, {
                        rotate: "240deg",
                        onComplete: () => {setZIndex(10)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "160deg",
                        onComplete: () => setPetala(4)
                    })
                    break

                case 4:
                    tl4.to(petalaa.current, {
                        rotate: "210deg",
                        onComplete: () => {setZIndex(10)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "120deg",
                        onComplete: () => setPetala(3)
                    })
                    break


                case 3:
                    tl3.to(petalaa.current, {
                        rotate: "180deg",
                        onComplete: () => {setZIndex(10)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "80deg",
                        onComplete: () => setPetala(2)
                    })
                    break

                case 2:
                    tl2.to(petalaa.current, {
                        rotate: "150deg",
                        onComplete: () => {setZIndex(10)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "40deg",
                        onComplete: () => setPetala(1)
                    })
                    break

                case 1:
                    tl1.to(petalaa.current, {
                        rotate: "120deg",
                        onComplete: () => {setZIndex(20)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "0deg",
                        onComplete: () => setPetala(0)
                    })
                    gsap.to(petalaMascara.current, {
                        opacity: 0
                    })
                    break

                case 0: 

                    tl0.fromTo(petalaa.current, {rotate: "360deg"}, {
                        rotate: "410deg",
                        onComplete: () => {setZIndex(10)},
                        duration: 0.3
                    }).to(petalaa.current, {
                        rotate: "320deg",
                        onComplete: () => setPetala(8)
                    })
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

                const angRotate = 40 * index

                gsap.to(petalaa.current, {
                    scrollTrigger:{
                        trigger: containerPetalas.current,
                        start: "50% bottom",
                        toggleActions: "play none none reverse"
                    },
                    rotate: `${angRotate}deg`,
                    duration: 0.3
                }  
            )
            
                




        })

        return () => context.revert()
    }, [])



    useEffect(() => {

        if(index == petalaAtual){
            setZIndex(20)
        }
    }, [])


    return (
        <div ref={petalaa} className={`petala${index} absolute flex justify-center items-center left-1/2 bottom-1/2 h-[15vw] z-${zIndex} -translate-x-1/2 w-96 origin-bottom`}>
            <div className="flex justify-center items-center h-full w-fit relative "> {/* Se tirar o flex justicenter itemcenter daqui fica tipo uma lente de camera abrindo */}
                <img className=" object-cover h-full w-auto" src={petala2} alt="" />
            </div>
        </div>
    )
}