function separaNumeros() {

    var array = [];

    for (i = 0;  i < arguments.length; i++) {

        if (!isNaN(arguments[i])) {

            array[i] = arguments[i];
        }

    }

    return array;
}

console.log(separaNumeros("Hola"));
console.log(separaNumeros("Hola", "Adiós"));
console.log(separaNumeros("Hola", "Adiós", 123));
console.log(separaNumeros("Hola", "Adiós", undefined, 222222, new Date()));