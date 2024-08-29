document.addEventListener('DOMContentLoaded', () => {
    const textoAnimado = document.querySelector('.textoAnimado');
    const texto = 'Hola, me llamo Carlos y soy un apasionado por el desarrollo web. En esta página encontrarás más información sobre mi.';
    //console.log(texto.textContent);

    const escribir = str => {
        let arreglo = str.split('');
        let i = 0;
        let imprimirTexto = setInterval(function () {
            textoAnimado.textContent += arreglo[i];
            i++;
            if (i === arreglo.length) {
                clearInterval(imprimirTexto);
            }
        }, 40);
    };

    escribir(texto);

});