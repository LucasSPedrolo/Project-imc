function activator (){

    const formGeral = document.querySelector('.form');

    function verificaNumeros (valor1 ,valor2){
        if (parseFloat(valor1) && parseFloat(valor2)){
            return 
        }
    }

    function desabilitaAutoReloading (evento){
        evento.preventDefault();

        const resultado = formGeral.querySelector('.resultado');
        const peso = formGeral.querySelector('#peso')
        const altura = formGeral.querySelector('#altura');
        
        resultado.innerHTML = "<style>.resultado{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 3rem;
            font-size: 1.4rem;
            margin-bottom: 1rem;
            background-color: rgb(44, 153, 44);
            border: 0.1rem solid black;
            </style>"
        }
    }

    formGeral.addEventListener('submit', desabilitaAutoReloading);

}

activator()