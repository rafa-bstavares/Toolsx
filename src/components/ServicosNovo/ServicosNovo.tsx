//import { useEffect, useState } from "react"
//import gsap from "gsap"
//import { useGSAP } from "@gsap/react"


//gsap.registerPlugin(useGSAP)

export default function ServicosNovo(){


    return (
        <div>

        </div>
    )

   /* const [borda, setBorda] = useState(0)
    const [idxServico, setIdxServico] = useState<number>(1)
    const [serieBaixo, setSerieBaixo] = useState<boolean>(false)
    const [ultimoServico, setUltimoServico] = useState<number>(0)


    useGSAP(() => {
        gsap.to(".quadrado", {
            borderRadius: "20px"
        })
    })


    function primeiroServ(){
        setUltimoServico(idxServico)
        setIdxServico(0)

    }

    function segundoServ(){
        setUltimoServico(idxServico)
        setIdxServico(1)

    }

    
    function terceiroServ(){
        setUltimoServico(idxServico)
        setIdxServico(2)

    }

    
    function quartoServ(){
        setUltimoServico(idxServico)
        setIdxServico(3)
    }

    function quintoServ(){
        setUltimoServico(idxServico)
        setIdxServico(4)
    }

    useEffect(() => {

        const calcPerc = 100 * idxServico


        console.log()

        gsap.to(".containerMarcador", {
            translateX: calcPerc + "%"
        })

        if(idxServico == 0){
            gsap.to(".amareloMeio", {
                borderRadius: "0 24px 24px 24px"
            })
        }else if(idxServico == 3){
            gsap.to(".amareloMeio", {
                borderRadius: "24px 0 24px 24px"
            })
        }else{
            gsap.to(".amareloMeio", {
                borderRadius: "24px 24px 24px 24px"
            })
        }

        if(idxServico > 3 ){

            if(ultimoServico < 3){
                //desceu
                const tl = gsap.timeline()

            }
        }

        
        if(idxServico < 3){
            if(ultimoServico > 3){
                //subiu 
                
            }
        }
    
    }, [idxServico])






    return (
        <div className="h-screen flex flex-col bg-green-500 px-[50px]">
            <div className=" mt-12 mb-4 text-3xl font-bold text-black font-Spectral">
                Nossos Serviços
            </div>
            <div className="flex-1">
                <div className="h-[90%] w-[90vw] rounded-3xl bg-white border-solid border-black border-2 flex flex-col overflow-hidden">
                    <div className="h-[10%] flex relative">
                        <div className="containerMarcador absolute w-1/4 h-full left-0 bottom-0 bg-amareloPrincipal rounded-t-2xl">
                            <div className="relative h-full w-full">
                                <div className="absolute h-1/3 aspect-square left-0 bottom-0 bg-amareloPrincipal -translate-x-[96%]"></div>
                                <div className="absolute h-1/3 [aspect-ratio:1.1] left-0 bottom-0 bg-white -translate-x-[99%] rounded-br-full"></div>
                                <div className="absolute h-1/3 aspect-square right-0 bottom-0 bg-amareloPrincipal translate-x-[96%]"></div>
                                <div className="absolute h-1/3 [aspect-ratio:1.1] right-0 bottom-0 bg-white translate-x-[99%] rounded-bl-full"></div>
                            </div>
                        </div>
                        <div className="flex-1 " onClick={primeiroServ}>

                        </div>
                        <div className="flex-1 " onClick={(segundoServ)}>

                        </div>
                        <div className="flex-1 " onClick={(terceiroServ)}>

                        </div>
                        <div className="flex-1 " onClick={(quartoServ)}>

                        </div>
                    </div>
                    <div className="amareloMeio flex-1 rounded-3xl bg-amareloPrincipal flex justify-center items-center">
                        <div className="bg-black w-56 aspect-square quadrado">

                        </div>
                    </div>
                    <div className="h-[10%] flex relative">
                        <div className="containerMarcador2 absolute w-1/4 h-full left-0 bottom-0 bg-amareloPrincipal rounded-b-2xl [clip-path(0%_0%,100%_0%,100%_0%,0%_0%)]">
                            <div className="relative h-full w-full">
                                <div className="absolute h-1/3 aspect-square left-0 top-0 bg-amareloPrincipal -translate-x-[96%]"></div>
                                <div className="absolute h-1/3 [aspect-ratio:1.1] left-0 top-0 bg-white -translate-x-[99%] rounded-tr-full"></div>
                                <div className="absolute h-1/3 aspect-square right-0 top-0 bg-amareloPrincipal translate-x-[96%]"></div>
                                <div className="absolute h-1/3 [aspect-ratio:1.1] right-0 top-0 bg-white translate-x-[99%] rounded-tl-full"></div>
                            </div>
                        </div>
                        <div className="flex-1 ">

                        </div>
                        <div className="flex-1 " >

                        </div>
                        <div className="flex-1 ">

                        </div>
                        <div className="flex-1 " >

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )*/
}