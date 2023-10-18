function separaNumeros(parametros) {

    array = [];

    for (i = 0;  i < parametros; i++) {

        if (!isNaN(parametros)) {

            array[i] = parametros;
        }

    }

    return array;
}

console.log(separaNumeros("Hola"));
console.log(separaNumeros("Hola", "Adiós"));
console.log(separaNumeros("Hola", "Adiós", 123));
console.log(separaNumeros("Hola", "Adiós", undefined, 222222, new Date()));