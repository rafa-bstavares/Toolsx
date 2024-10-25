import ItemFaq from "../ItemFaq/ItemFaq"

export default function Faq(){

    const Faqs = [
        {pergunta: "Como funciona a entrega das ferramentas alugadas?", resposta: "A Toolsx entrega as ferramentas diretamente na sua obra ou você pode retirá-las em nossa loja."},
        {pergunta: "Posso comprar as ferramentas que aluguei?", resposta: "Sim! Se estiver satisfeito com o equipamento, oferecemos condições especiais para compra."},
        {pergunta: "Como é feita a manutenção das ferramentas alugadas?", resposta: "A manutenção é por nossa conta. Garantimos que todas as ferramentas estão em perfeito estado de uso."},
    ]


    return (
        <div className="bg-corPrincipal text-[#fffeee] flex flex-col items-center px-[20px] lg:px-[50px] py-[100px] bg-cinzaPrincipal">
            <div className="lg:text-6xl text-4xl lg:w-1/2 text-center mb-10 font-Hammer">
                FAQ
            </div>
            <div className="w-full border-t-2 border-solid border-[#fffeee]">
                {Faqs.map(item => <ItemFaq pergunta={item.pergunta} resposta={item.resposta} />)}
            </div>
        </div>
    )
}