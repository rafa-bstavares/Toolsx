


export default function Footer(){
    return(
        <div className="bg-[#252523] flex flex-col gap-6 lg:px-[50px] px-[20px] py-[70px] text-white">
            <div className="flex lg:flex-row flex-col gap-4">
                <div className="lg:w-1/2 flex flex-col w-[90vw] ">
                    <div>
                        <span className="font-bold">Telefone: (11) 991225311</span>
                    </div>
                    <div className="font-bold">Entre em contato conosco!</div>
                </div>
                <div className="lg:w-1/2 lg:text-start  w-[90vw]">

                </div>
            </div>
            <div className="flex flex-col italic">
                <div>Desenvolvimento do site: Rafael Tavares (@rafas.t)</div>
            </div>
        </div>
    )
}