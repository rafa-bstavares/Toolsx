import iconePrego from "../../assets/images/iconePrego.svg"


type Props = {
    depoimento: string,
    nome: string
}

export default function ItemDepoimentos({depoimento, nome}: Props){
    
    return (
        <div className=" lg:w-[45vw] w-[90vw]   flex flex-col">
            <div className="text-lg text-cinzaPrincipal italic text-center bg-[#fffeee] lg:px-12 px-8 py-8 rounded-2xl flex flex-col gap-8">
                <div className="flex justify-start">
                    <img className="w-[5%] h-auto object-cover" src={iconePrego} alt="" />
                    <img className="w-[5%] h-auto object-cover" src={iconePrego} alt="" />
                </div>
                {depoimento}
            </div>
            <div className="text-sm flex text-cinzaPrincipal text-center  relative w-[100%] self-center">
                <div className="lg:w-24 w-12 bg-[#fffeee] relative">
                    <div className="absolute w-[105%] -top-[0.001px] -bottom-[0.001px] rounded-tr-xl bg-cinzaPrincipal right-0"></div>
                </div> 
                <div className="flex-1 bg-[#fffeee] px-12 py-4  rounded-b-2xl">
                    <span className="opacity-70">{nome}</span>
                </div>
                <div className="lg:w-24 w-12 bg-[#fffeee] relative">
                    <div className="absolute w-[105%] -top-[0.0001px] -bottom-[0.001px] rounded-tl-xl bg-cinzaPrincipal left-0"></div>
                </div>

            </div>
        </div>
    )

}