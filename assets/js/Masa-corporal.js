   const imc = () => {

        let peso = document.getElementById('peso').value;
        let altura = document.getElementById('altura').value;
    
    
        let resultado = peso/(altura * altura);
        let im = resultado.toFixed(2);
    
        document.write(`<h2>Tu indice de masa corporal es: ${im}</h2>`);
        //alert(`Tu IMC es: ${im}`);
    }