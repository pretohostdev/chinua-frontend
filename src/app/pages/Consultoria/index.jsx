import Contacto from "../../shared/components/Contacto"
import { NavBar } from "../../shared/components/NavBar"
import { Container } from "../Home/styles"


const Consultoria=()=>{
    return(
        <>
        <NavBar/>
        <div className="w-full  flex-col relative">
            <div  className="w-fll  h-80 bg-slate-950  flex justify-center items-center mb-6" >
                <div>
                <h1 className="text-white  text-4xl" >Oferecemos consultoria em diversas áreas</h1>
                {/* <p className="text-white text-3xl">em diversas áreas</p> */}
                </div>
            </div>
            <Container/>
            <div className="flex justify-center gap-2 flex-wrap mb-14 mt-4" >
                    <div className="w-60 h-20 bg-white flex justify-center items-center rounded border-2 border-yellow-600" >
                        <h3 className="text-2xl font-normal" >Administração</h3>
                    </div>
                    <div className="w-80 h-20 bg-white flex justify-center items-center rounded border-2 border-yellow-600" >
                        <h3 className="text-2xl font-normal" >Contabilidade</h3>
                    </div>
                    <div className="w-80 h-20 bg-white flex justify-center items-center rounded border-2 border-yellow-600" >
                        <h3 className="text-2xl font-normal" >Direito</h3>
                    </div>
                    <div className="w-80 h-20 bg-white flex justify-center items-center rounded border-2 border-yellow-600" >
                        <h3 className="text-2xl font-normal" >Engenharia</h3>
                    </div>
                    <div className="w-80 h-20 bg-white flex justify-center items-center rounded border-2 border-yellow-600" >
                        <h3 className="text-2xl font-normal" >Informática</h3>
                    </div>
                    <div className="w-80 h-20 bg-white flex justify-center items-center rounded border-2 border-yellow-600" >
                        <h3 className="text-2xl font-normal" >Marketing</h3>
                    </div>
                    <div className="w-80 h-20 bg-white flex justify-center items-center rounded border-2 border-yellow-600" >
                        <h3 className="text-2xl font-normal" >Recursos Humanos</h3>
                    </div>
            </div>
   

            <div className="flex justify-center items-center mb-6">
                <a className="bg-yellow-500  text-white  p-2  rounded" href="https://wa.me/+244923845779" target="_blank" >Fale connosco</a>
            </div>
            <Container/>
        </div>
        <Container>
        <div className="container">
        <Contacto />
      </div>
            
        </Container>
        </>
    )
}

export default Consultoria