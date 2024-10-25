import Banner from "./components/Banner/Banner"
import Banner2 from "./components/Banner2/Banner2"
import ServicosFinal from "./components/ServicosFinal/ServicosFinal"
import Vantagens from "./components/Vantagens/Vantagens"
import Faq from "./components/Faq/Faq"
import PassoAPasso from "./components/PassoAPasso/PassoAPasso"
import Beneficios from "./components/Beneficios/Beneficios"
import Orcamento from "./components/Orcamento/Orcamento"
import wppIcone from "./assets/images/wppIconeBranco.svg"
import Footer from "./components/Footer/Footer"
import { useRef } from "react"

function App() {

  const containerOrcamento = useRef<HTMLDivElement>(null)

  function cliqueOrcamento(){
    if(containerOrcamento){
      containerOrcamento.current?.scrollIntoView({
          behavior: "smooth"
      })
  }
  }

  return (
    <div className="font-Mont overflow-hidden bg-amareloPrincipal relative">
      <a className='fixed bottom-4 right-4 z-[222222222222222222]' href="https://wa.me/5511991225311" target="_blank">
        <div className='w-12 h-12 rounded-full p-3 bg-[#116330]'>
          <img className='w-full h-auto' src={wppIcone} alt="icone whatsapp" />
        </div>
      </a>    
      <Banner/>
      <div className="fundoBrancoAmarelo">
        <Banner2/>
        <ServicosFinal cliqueOrcamento={cliqueOrcamento}/>
        <Vantagens cliqueOrcamento={cliqueOrcamento}/>
        <PassoAPasso/>
        <Orcamento refOrcamento={containerOrcamento}/>
        <Beneficios/>
        <Faq/>
        <Footer/>
      </div>
    </div>  
  )
}

export default App
