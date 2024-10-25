import grid from "../../assets/images/gridBanner.svg"
import imgBaixoBanner from "../../assets/images/imgBaixoBanner.png"
import imgBaixoBannerMobile from "../../assets/images/imgBannerBaixoMobile.jpg"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useLayoutEffect, useRef } from "react"
import capacete from "../../assets/images/capacete.jpg"
import martelo from "../../assets/images/martelo.jpg"
import pincel from "../../assets/images/pincel.jpg"
import britadeira from "../../assets/images/britadeira.jpg"
import cerrote from "../../assets/images/cerrote.jpg"
import ferramentas from "../../assets/images/ferramentas.jpg"
import logo from "../../assets/images/toolsXLogo.png"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

export default function Banner(){

    const containerImgBaixo = useRef(null)
    const containerImgMobile = useRef(null)
    const containerBanner = useRef(null)
    const spanFerramentas1 = useRef(null)
    const spanFerramentas2 = useRef(null)


    useLayoutEffect(() => {
        const context = gsap.context(() => {

            gsap.to(spanFerramentas1.current, {
                duration: 1,
                clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            })

            gsap.to(spanFerramentas2.current, {
                duration: 1,
                clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                delay: 0.5
            })
            

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerBanner.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: ".containerPinado",
                    scrub: 1
                },
            })



            tl.fromTo(containerImgBaixo.current, {yPercent: 50, xPercent: -50}, {
                scrollTrigger: {
                    trigger: containerBanner.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1
                },
                width: "100vw",
                yPercent: 1,
                xPercent: -50
            }).fromTo(containerImgMobile.current, {yPercent: 75, xPercent: -50}, {
                scrollTrigger: {
                    trigger: containerBanner.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1
                },
                width: "100vw",
                yPercent: 1,
                xPercent: -50
            }, "<").to(".iconeEsq", {
                scrollTrigger: {
                    trigger: containerBanner.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1
                },
                left: "50%",
                top: "90%"
            }, "<").to(".iconeDir", {
                scrollTrigger: {
                    trigger: containerBanner.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1
                },
                right: "50%",
                top: "90%"
            }, "<")



            

 
        })

        return () => context.revert()
    }, [])

    return (
        <div ref={containerBanner} className="h-[180vh] ">
            <div className="containerPinado h-screen bg-amareloPrincipal relative mb-96 flex justify-center lg:items-stretch items-center" >
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white z-20 flex gap-4 items-center">
                    <img className="lg:w-[5vw] w-[12vw] h-auto" src={logo} alt="imagem logo ToolsX" />
                    <div className="lg:text-xl text-sm">(11) 991225311</div>
                </div>
                {/* grid fundo */}
                <div className="absolute w-[70vw] aspect-square bottom-1/4 left-1/2 -translate-x-1/2 bg-[#ffde5c]">
                    <div className="w-full h-full relative">
                        <img className="w-full h-full object-cover opacity-30" src={grid} alt="grid template quadriculado leve de fundo" />
                        <div className="absolute top-0 left-0 w-full h-[25vh] bg-gradient-to-b from-amareloPrincipal to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full h-[25vh] bg-gradient-to-t from-amareloPrincipal to-transparent"></div>
                        <div className="absolute left-0 bottom-0 w-[25vw] h-full bg-gradient-to-r from-amareloPrincipal to-transparent"></div>
                        <div className="absolute right-0 bottom-0 w-[25vw] h-full bg-gradient-to-l from-amareloPrincipal to-transparent"></div>
                    </div>
                </div>
                {/* fim grid fundo */}
                
                <div className="iconeEsq overflow-hidden absolute [will-change:left,top] lg:top-[24%] top-[10%] w-12 aspect-square lg:left-32 left-0 lg:translate-x-0 -translate-x-[30%] p-2 [box-shadow:0px_0px_20px_#fff] rounded-xl lg:-rotate-3 -rotate-12 scale-125 lg:scale-[1]">
                    <img className="w-full h-auto -rotate-3  " src={cerrote} alt="" />
                </div>
                <div className="iconeEsq overflow-hidden absolute [will-change:left,top] lg:top-[45%] top-2 lg:left-64 left-[35%]  p-2 w-12 aspect-square [box-shadow:0px_0px_20px_#fff] rounded-xl -rotate-[40deg] scale-[0.5] lg:scale-[0.9]">
                    <img className="w-full h-auto  -rotate-[20deg] " src={martelo} alt="" />
                </div>  

                <div className="iconeEsq overflow-hidden absolute [will-change:left,top] top-[67%] left-8 p-2 w-12 aspect-square [box-shadow:0px_0px_20px_#fff] rounded-xl -rotate-[40deg] scale-90">
                    <img className="w-full h-auto  -rotate-[0deg] " src={ferramentas} alt="" />
                </div>  

                <div className="iconeDir overflow-hidden [will-change:right,top] absolute lg:top-[57%] top-[27%] w-12 aspect-square lg:right-64 right-32 p-2 [box-shadow:0px_0px_20px_#fff] rounded-xl rotate-[30deg] lg:scale-[1.1] scale-[0.6]">
                    <img className="w-full h-auto  rotate-[0deg] " src={pincel} alt="" />
                </div>  

                <div className="iconeDir overflow-hidden [will-change:right,top] absolute lg:top-[77%] top-[15%] w-12 aspect-square lg:right-12 p-2 right-0 lg:translate-x-0 translate-x-[20%] [box-shadow:0px_0px_20px_#fff] rounded-xl rotate-[15deg] lg:scale-[1.2] scale-125">
                    <img className="w-full h-auto  rotate-[0deg] " src={capacete} alt="" />
                </div> 

                <div className="iconeDir overflow-hidden [will-change:right,top] absolute lg:top-[27%] top-[62%] w-12 aspect-square lg:right-24 right-2 p-2 [box-shadow:0px_0px_20px_#fff] rounded-xl rotate-[10deg] scale-[0.6] lg:scale-[1.1]">
                    <img className="w-full h-auto  rotate-[0deg] " src={britadeira} alt="" />
                </div>  


                <div className="h-[50vh] relative z-10 flex flex-col justify-center gap-8">
                    <div className="font-bold lg:text-4xl text-3xl text-center text-black font-Spectral lg:[line-height:53px] [line-height:39px] lg:pt-0  lg:w-full w-[90vw]">
                        Locação de <span className="relative px-2">Ferramentas<div ref={spanFerramentas1} className=" bg-white text-[#000] rounded-xl absolute z-20 flex justify-center items-center inset-0 px-2 [clip-path:polygon(0%_0%,0%_0%,0%_100%,0%_100%)]">Ferramentas</div></span> <br className="lg:block hidden"/>e Acessórios para <span className="relative px-2">Construção Civil <div ref={spanFerramentas2} className=" bg-white text-[#000] flex justify-center items-center rounded-xl absolute z-20 inset-0 px-2 [clip-path:polygon(0%_0%,0%_0%,0%_100%,0%_100%)]">Construção Civil</div></span> 
                    </div>
                    <a className="lg:absolute lg:bottom-0 -bottom-[40%] left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 lg:self-stretch self-center" target="_blank" href="https://wa.me/5511991225311">
                        <div className=" lg:w-auto w-[80%] bg-white rounded-xl px-4 py-2 font-bold lg:text-lg text-[16px] cursor-pointer text-center">
                            Alugar Ferramentas
                        </div>
                    </a>
                </div>

                <div  ref={containerImgBaixo} className="lg:block hidden [will-change:width,translate]   z-30 w-[70vw] h-auto absolute left-1/2 bottom-0 rounded-t-3xl overflow-hidden ">
                    <div className="w-full h-auto relative">
                        <img className="w-full h-auto object-cover" src={imgBaixoBanner} alt="" />
                        <div className="absolute lg:flex hidden bottom-8 top-1/2 flex-col justify-end left-[50px] w-[40vw] text-3xl text-[#363633] font-bold font-Spectral">As Melhores Soluções em Ferramentas para Sua Obra. <br/> <span className="text-lg font-normal opacity-70">Locação de Andaimes e Equipamentos Profissionais</span></div>
                    </div>
                </div>

                <div ref={containerImgMobile} className="lg:hidden [will-change:width,translate] absolute z-10 left-1/2  w-[40vh]  bottom-0  rounded-xl overflow-hidden">
                    <div className="w-full h-auto relative">
                        <img className="w-full h-auto object-cover" src={imgBaixoBannerMobile} alt="" />
                    </div>
                </div>

                {/* Para ele crescer pra cima tbm é so colocar h auto ao inves de 85vh */}

            </div>
        </div>
    )
}