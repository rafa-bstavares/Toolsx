import { Dispatch, SetStateAction, useState } from "react"

type Props = {
    nome: string,
    img: string,
    setOrcamentosEscolhidos: Dispatch<SetStateAction<string[]>>,
    orcamentoAtual: string[]
}

export default function ProdutoOrcamento({nome, img, setOrcamentosEscolhidos, orcamentoAtual}: Props){

    const [clicado, setClicado] = useState<boolean>(false)

    function cliqueCarrinho(){
        setClicado(!clicado)
        if(clicado){
            //remover
            const cloneOrcamentos = orcamentoAtual.filter(item => item !== nome)
            setOrcamentosEscolhidos(cloneOrcamentos)
        }else{
            //adicionar
            const cloneOrcamentos = [...orcamentoAtual]
            cloneOrcamentos.push(nome)
            setOrcamentosEscolhidos(cloneOrcamentos)
        }
    }

    return (
        <div className="lg:w-[90%] w-full p-8 rounded-xl bg-white flex flex-col gap-8 text-cinzaPrincipal items-start">
            <div className="w-full h-auto [box-shadow:0px_0px_10px_#000] rounded-xl overflow-hidden">
                <img src={img} alt={`imagem produto: ${nome}`} />
            </div>
            <div className="opacity-90">
                {nome}
            </div>
            <div onClick={cliqueCarrinho} className={`mt-4 px-4 py-2 ${clicado ? "bg-red-600 text-white" : "bg-amareloPrincipal text-cinzaPrincipal"} transition-all duration-300 ease-linear rounded-xl font-semibold cursor-pointer`}>
                {
                    clicado ? 
                     "Remover do orçamento"
                        : 
                    "Adicionar ao orçamento"
                }
            </div>
        </div>
    )
}