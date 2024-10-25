
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export default function PassoAPasso(){

    const passo1 = useRef(null)
    const numero1 = useRef(null)
    const texto1 = useRef(null)
    const passo2 = useRef(null)
    const numero2 = useRef(null)
    const texto2 = useRef(null)
    const passo3 = useRef(null)
    const numero3 = useRef(null)
    const texto3 = useRef(null)

    useGSAP(() => {

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: passo1.current,
                start: "10% bottom",
                toggleActions: "play none none reverse",
            }
        })

        
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: passo2.current,
                start: "10% bottom",
                toggleActions: "play none none reverse",
            },
        })

        
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: passo3.current,
                start: "10% bottom",
                toggleActions: "play none none reverse",
            },
        })

        tl1.fromTo(passo1.current, {opacity: 0, yPercent: 100}, {
            opacity: 1,
            yPercent: 0,
            duration: 0.8
        }).fromTo(numero1.current, {opacity: 0, yPercent: 100}, {
            opacity: 1,
            yPercent: 0,
            delay: 0.3
        }, "<").fromTo(texto1.current, {opacity: 0, yPercent: 100}, {
            opacity: 1,
            yPercent: 0,
            delay: 0.6
        }, "<")

        tl2.fromTo(passo2.current, {opacity: 0, yPercent: 100}, {
            opacity: 1,
            yPercent: 0,
            duration: 0.8
        }).fromTo(numero2.current, {opacity: 0, yPercent: 100}, {
            opacity: 1,
            yPercent: 0,
            delay: 0.3
        }, "<").fromTo(texto2.current, {opacity: 0, yPercent: 100}, {
            opacity: 1,
            yPercent: 0,
            delay: 0.6
        }, "<")

        tl3.fromTo(passo3.current, {opacity: 0, yPercent: 100}, {
            opacity: 1,
            yPercent: 0,
            duration: 0.8
        }).fromTo(numero3.current, {opacity: 0, yPercent: 100}, {
            opacity: 1,
            yPercent: 0,
            delay: 0.3
        }, "<").fromTo(texto3.current, {opacity: 0, yPercent: 100}, {
            opacity: 1,
            yPercent: 0,
            delay: 0.6
        }, "<")

    })


    return (
        <div className="px-[20px] lg:px-[50px] py-[100px] flex flex-col bg-cinzaPrincipal text-[#fffeee]">
            <div className="text-3xl text-white font-Spectral pt-12  text-center font-bold mb-24">Como funciona o aluguel</div>
            <div className="flex lg:justify-center flex-col  items-center">
                <div ref={passo1} className=" w-[80vw] h-auto relative flex flex-col items-start py-8 text-[#fffee] gap-4">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#fffeee] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#fffeee] rounded-full"></div>
                    <div ref={numero1} className="rounded-[40px] text-2xl px-4 py-2 flex justify-center items-center aspect-[1.5]  border-2 border-[#fffee]">
                        1
                    </div>
                    <div ref={texto1} className="text-xl">
                        Escolha a ferramenta que precisa
                    </div>
                </div>

                <div ref={passo2} className="w-[80vw] h-auto relative flex flex-col items-start py-8 text-[#fffee] gap-4">
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#fffeee] rounded-full"></div>
                    <div ref={numero2} className="rounded-[40px] text-2xl px-4 py-2 flex justify-center items-center aspect-[1.5]  border-2 border-[#fffee]">
                        2
                    </div>
                    <div ref={texto2} className="text-xl">
                        Entre em contato conosco via WhatsApp ou telefone
                    </div>
                </div>

                <div ref={passo3} className=" w-[80vw] h-auto relative flex flex-col items-start py-8 text-[#fffee] gap-4">
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#fffeee] rounded-full"></div>
                    <div ref={numero3} className="rounded-[40px] text-2xl px-4 py-2 flex justify-center items-center aspect-[1.5]  border-2 border-[#fffee]">
                        3
                    </div>
                    <div ref={texto3} className="text-xl">
                        Receba o equipamento em sua obra e devolva com facilidade
                    </div>
                </div>
            </div>
            
        </div>
    )
}