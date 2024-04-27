import api from "../../core/api/index.js";
import {useState,useEffect} from "react";
import {NewCardCarro} from "../../shared/components/Card/Card.jsx";
import env from "react-dotenv"


const API=import.meta.env.API_LOCAL
export  default  function PageCarro( ){
    const [listaDeCarro,setListaDeCarro]=useState([])
    async  function buscarTodosCarros(){
            await api.get("/carro/listar")
        .then(  async (response)=>{
            const carros= await response.data;
            setListaDeCarro(carros);
        })
    }
    useEffect(() => {
        buscarTodosCarros()
        }, []);
    
    return(
        <div>
            <h1>Pagina de de Carro</h1>
            
            <div style={{
                width:"100%",
                display:"flex",
                justifyContent:"center",
                alignContent:"center"
            }} >
            {
            listaDeCarro.map((carro,index)=>
               ( <NewCardCarro
                   image={`http://localhost:3000/uploads/carros/${carro.image.map(images=>images)[0]}`}
                nomeDoCarro={carro.nomeDoCarro}
                price={carro.price}
                tipoCombustivel={carro.tipoCombustivel}
                tipoDefreio={carro.tipoDefreio}
                tipoMotor={carro.tipoMotor}
                   key={carro._id}
                />)
            )}
                
            </div>
        </div>
    )
}