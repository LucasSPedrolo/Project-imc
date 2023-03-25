function activator() {

    const formGeral = document.querySelector('.form');

    function desabilitaAutoReloading(evento) {
        evento.preventDefault();

        const resultado = document.querySelector('.resultado');
        const peso = formGeral.querySelector('#peso');
        const altura = formGeral.querySelector('#altura');

        const botaoCalc = formGeral.querySelector(".botaoCalculo");

        function detectaInt(valor1) {
            if (parseFloat(valor1.value)) {
                return parseFloat(valor1.value)
            }

            else {
                return NaN
            }
        }

        const valorPeso = detectaInt(peso);
        const valorAltura = detectaInt(altura);

        const calculoIMC = valorPeso / (valorAltura ** 2);

        if (isNaN(valorPeso && valorAltura)) {
            botaoCalc.innerHTML = '<div class="invalidoCalc"> falta valores validos </div>';
        }

        else {
            if (calculoIMC < 18.50){
                resultado.innerHTML = `<div class="resultImc"><p>o seu IMC é ${calculoIMC.toFixed(2)} (abaixo do peso adequado)</p></div>`;
            }

            else if((calculoIMC <= 24.99) && (calculoIMC => 18.50)){
                resultado.innerHTML = `<div class="resultImc"><p>o seu IMC é ${calculoIMC.toFixed(2)} (Peso adequado)</p></div>`;
            }
            else if ((calculoIMC <= 25) && (calculoIMC => 29,99)){
                resultado.innerHTML = `<div class="resultImc"><p>o seu IMC é ${calculoIMC.toFixed(2)} (Sobrepeso)</p></div>`;
            }

            else if((calculoIMC <= 30) && (calculoIMC => 34,99)){
                resultado.innerHTML = `<div class="resultImc"><p>o seu IMC é ${calculoIMC.toFixed(2)} (Obesidade (grau 1)</p></div>`;
            }

            else if((calculoIMC <= 35) && (calculoIMC => 39,99)){
                resultado.innerHTML = `<div class="resultImc"><p>o seu IMC é ${calculoIMC.toFixed(2)} (Obesidade (grau 2)</p></div>`;
            }

            else {
                resultado.innerHTML = `<div class="resultImc"><p>o seu IMC é ${calculoIMC.toFixed(2)} (Obesidade (grau 3)</p></div>`;
            }
        }

    }
    formGeral.addEventListener('submit', desabilitaAutoReloading);

}

activator()