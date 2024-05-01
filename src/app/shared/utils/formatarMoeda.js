
 export default function FormatarMoeda(valor, casasDecimais = 2,simbolo = "AOA") {

    const newValor=Number(valor)
  
    
    if (typeof newValor !== "number") {
      throw new TypeError("O valor deve ser um número.");
    }
  
  
    const options = {
      style: "currency",
      currency: "AOA",
      minimumFractionDigits: casasDecimais,
      
    };
  
  
    const formatador = new Intl.NumberFormat("pt-AO", options,simbolo);
    return formatador.format(newValor).replace("KZ", simbolo);
  }


  