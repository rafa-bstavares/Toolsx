import ProdutoOrcamento from "../ProdutoOrcamento/ProdutoOrcamento"
import imgTrena from "../../assets/images/trena.jpg"
import imgNivel from "../../assets/images/nivel.jpg"
import imgCorte from "../../assets/images/plaina.jpg"
import britadeira from "../../assets/images/britadeira (1).jpg"
import pa from "../../assets/images/pá.jpg"
import esmerilhadeira from "../../assets/images/esmirilhadeira.jpg"
import serraCirc from "../../assets/images/serra.jpg"
import nivelEle from "../../assets/images/nivelEletronico.jpg"
import cintas from "../../assets/images/cintaIcamento.jpg"
import cordas from "../../assets/images/cordas.jpg"
import anilha from "../../assets/images/anilha.jpg"
import chaveFenda from "../../assets/images/chaveFenda.jpg"
import cerrote from "../../assets/images/cerroteOrc.jpg"
import andaime from "../../assets/images/andaime.jpg"
import betoneira from "../../assets/images/betoneira.jpg"
import wap from "../../assets/images/wap.jpg"
import arame from "../../assets/images/arame.jpg"
import carrinhoMao from "../../assets/images/carrinhoMao.jpg"
import { RefObject, useEffect, useRef, useState } from "react"

type Props = {
    refOrcamento: RefObject<HTMLDivElement>
}

export default function Orcamento({refOrcamento}: Props){

    const [orcamentosEscolhidos, setOrcamentosEscolhidos] = useState<string[]>([])
    const [mensagem, setMensagem] = useState<string>("")

    const btWpp = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        console.log(orcamentosEscolhidos)
    }, [orcamentosEscolhidos])


    const produtos = [
        {nome: "Instrumentos de medição", img: imgTrena},
        {nome: "Prumos e Níveis", img: imgNivel},
        {nome: "Máquinas de corte, serras, plainas", img: imgCorte},
        {nome: "Marteletes, britadeiras", img: britadeira},
        {nome: "Pás, enxadas, foice...", img: pa},
        {nome: "Carrinhos de mão", img: carrinhoMao},
        {nome: "Esmerilhadeiras, lixadeiras, furadeiras", img: esmerilhadeira},
        {nome: "Serras circularres", img: serraCirc},
        {nome: "Níveis eletrônicos", img: nivelEle},
        {nome: "Cintas de içamento", img: cintas},
        {nome: "Cordas", img: cordas},
        {nome: "Anilhas", img: anilha},
        {nome: "Chaves de fenda, filips, boca de estrela", img: chaveFenda},
        {nome: "Serrotes, arco de serra", img: cerrote},
        {nome: "Andaimes", img: andaime},
        {nome: "Betoneiras", img: betoneira},
        {nome: "Máquina de lavagem wapp", img: wap},
        {nome: "Arame farpado 500m", img: arame},
    ]


    function enviarOrcamento(){
        if(orcamentosEscolhidos.length > 0){
            const ferramentas = orcamentosEscolhidos.join(", ")
            let msg = "Olá, vim pelo site. Gostaria de um orçamento para o seguinte grupo de ferramentas: " + ferramentas
            msg = msg.replace(/\s/g, "%20")
            setMensagem(msg)
        }else{
            let msg = "Olá! Vim pelo site, gostaria de um orçamento, por favor!"
            msg = msg.replace(/\s/g, "%20")
            setMensagem(msg)
        }
    }

    useEffect(() => {
        if(mensagem && btWpp.current){
            btWpp.current.click()
        }
    }, [mensagem])

    return (
        <div ref={refOrcamento} className="px-[20px] lg:px-[50px] pb-[100px] flex flex-col bg-cinzaPrincipal">
            <div className="text-3xl text-[#fffeee] font-Spectral pt-12 text-center font-bold mb-24">Escolha e faça seu orçamento!</div>
            <div className="flex flex-col">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 justify-items-center ">
                    {
                        produtos.map(item => <ProdutoOrcamento key={item.nome} nome={item.nome} img={item.img} setOrcamentosEscolhidos={setOrcamentosEscolhidos} orcamentoAtual={orcamentosEscolhidos}/>)
                    }
                </div>

            </div>
            <div onClick={enviarOrcamento} className="lg:w-[30%] w-full self-center mt-24 p-4 rounded-lg bg-cinzaPrincipal text-center border-2 border-amareloPrincipal hover:border-white text-[#fffeee] italic lg:left-[20%] left-8 lg:right-[20%] right-8 z-[1000000] [box-shadow:4px_4px_0px_#fbca01] hover:[box-shadow:4px_4px_0px_#fff] transition-all duration-300 ease-linear cursor-pointer">
                Calcular orçamento
            </div>
            <a href={`https://wa.me/5521987671995?text=${mensagem}`} target="_blank" ref={btWpp} className="w-0 h-0 opacity-0"></a>
        </div>
    )
}