// Ejercicio 1
function solicitarGasto(categoria) {
    while (true) {
        let gasto = parseFloat(prompt(`Introduce los gastos de ${categoria} en euros:`));
        if (!isNaN(gasto) && gasto >= 0) {
            return gasto;
        } else {
            alert("Por favor, introduce un número válido.");
        }
    }
}

let gastosAlojamiento = solicitarGasto("alojamiento");
let gastosComida = solicitarGasto("comida");
let gastosEntretenimiento = solicitarGasto("entretenimiento");
let costoTotal = gastosAlojamiento + gastosComida + gastosEntretenimiento;
alert(`El costo total del viaje es ${costoTotal.toFixed(2)}€`);

// Ejercicio 2
function solicitarEdadPerro() {
    while (true) {
        let edad = parseFloat(prompt("Introduce la edad de tu perro en años:"));
        if (!isNaN(edad) && edad > 0) {
            return edad;
        } else {
            alert("Por favor, introduce un número válido mayor que 0.");
        }
    }
}

let edadPerro = solicitarEdadPerro();
let edadHumana = edadPerro * 7;
alert(`La edad del perro en años humanos es ${edadHumana} años.`);

// Ejercicio 3
function solicitarNumero(mensaje) {
    while (true) {
        let numero = parseFloat(prompt(mensaje));
        if (!isNaN(numero) && numero > 0) {
            return numero;
        } else {
            alert("Por favor, introduce un número válido mayor que 0.");
        }
    }
}

function clasificarIMC(imc) {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
}

let peso = solicitarNumero("Introduce tu peso en kilogramos:");
let altura = solicitarNumero("Introduce tu altura en metros:");
let imc = peso / (altura * altura);
let clasificacion = clasificarIMC(imc);
alert(`IMC: ${imc.toFixed(2)}, Clasificación: ${clasificacion}`);

// Ejercicio 4
let a = 33;
console.log("Expresión 1:", !((a > 10) && (a < 20)));
console.log("Expresión 2:", !((a > 10) || !(a < 20)));

// Ejercicio 5
let a5 = 20;
let b5 = a5;
let c5 = 15;
let d5 = 10;
console.log(((a5 == b5) || (b5 > c5)) || (c5 < d5));

// Ejercicio 6
let a6 = 10, b6 = 12, c6 = 13, d6 = 10;
console.log("4:", ((a6 > b6) || (a6 < c6)) && ((a6 == c6) || (a6 >= b6)));
console.log("5:", ((a6 >= b6) || (a6 < d6)) && ((a6 >= d6) && (c6 > d6)));
console.log("6:", !(a6 == c6) && (c6 > b6));

// Ejercicio 7
let M = 8, N = 9, R = 5, S = 5, T = 4, V = 7;
let resultado = !( ( M > N && R > S ) || ( !( T < V && S > M ) ) );
console.log(resultado);

// Ejercicio 8
console.log("8:", (3 * Math.pow(2, 2) - 4 / 2 * 1) > (3 * Math.pow(2, 2) * 1) && (5 > 11 % 4));
console.log("9:", (3 >= 3 || 5 != 5) && !(15 / 5 + 2 != 5));
console.log("10:", !( !((3 * (-3)) * 2 > (3 - (-3) * 2) || Math.pow(1, 3) * 2 > 6) ));
console.log("11:", (3 >= 4 && 5 > 3 && 3 > 3) || !(4 <= 4 || 5 > 4 || 6 >= 7));

// Ejercicio X
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solicitarEntero(mensaje) {
    while (true) {
        let numero = parseInt(prompt(mensaje));
        if (!isNaN(numero) && Number.isInteger(numero)) {
            return numero;
        } else {
            alert("Por favor, introduce un número entero válido.");
        }
    }
}

let inicio = solicitarEntero("Introduce el primer número:");
let fin = solicitarEntero("Introduce el segundo número:");

if (inicio > fin) {
    [inicio, fin] = [fin, inicio];
}

let primos = [];
for (let i = inicio; i <= fin; i++) {
    if (esPrimo(i)) {
        primos.push(i);
    }
}

if (primos.length > 0) {
    alert(`Los números primos entre ${inicio} y ${fin} son: ${primos.join(", ")}`);
} else {
    alert(`No hay números primos entre ${inicio} y ${fin}.`);
}

// Ejercicio Y
function generarFibonacci(n) {
    let secuencia = [0, 1];
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return secuencia;

    for (let i = 2; i < n; i++) {
        secuencia.push(secuencia[i-1] + secuencia[i-2]);
    }
    return secuencia;
}

function solicitarNumeroPositivo(mensaje) {
    while (true) {
        let numero = parseInt(prompt(mensaje));
        if (!isNaN(numero) && Number.isInteger(numero) && numero > 0) {
            return numero;
        } else {
            alert("Por favor, introduce un número entero positivo válido.");
        }
    }
}

let n = solicitarNumeroPositivo("Introduce el número de términos de la secuencia de Fibonacci:");
let fibonacci = generarFibonacci(n);
alert(`Los primeros ${n} términos de la secuencia de Fibonacci son: ${fibonacci.join(", ")}`);

// Ejercicio 9
function calcular(operacion, num1, num2) {
    if (operacion === '+') {
        return num1 + num2;
    } else if (operacion === '-') {
        return num1 - num2;
    } else if (operacion === '*') {
        return num1 * num2;
    } else if (operacion === '/') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: División por cero";
        }
    } else {
        return "Operación no válida";
    }
}

function solicitarNumero(mensaje) {
    while (true) {
        let numero = parseFloat(prompt(mensaje));
        if (!isNaN(numero)) {
            return numero;
        } else {
            alert("Por favor, introduce un número válido.");
        }
    }
}

let operacion = prompt("Introduce la operación (+, -, *, /):");
let numero1 = solicitarNumero("Introduce el primer número:");
let numero2 = solicitarNumero("Introduce el segundo número:");
let resultado = calcular(operacion, numero1, numero2);
alert(`El resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`);

// Ejercicio 10
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function solicitarNumero(mensaje) {
    while (true) {
        let numero = parseInt(prompt(mensaje));
        if (!isNaN(numero) && numero >= 1 && numero <= 100) {
            return numero;
        } else {
            alert("Por favor, introduce un número válido entre 1 y 100.");
        }
    }
}

let numeroAleatorio = generarNumeroAleatorio();
let intentos = 0;
let adivinado = false;

while (!adivinado) {
    let numeroUsuario = solicitarNumero("Adivina el número (entre 1 y 100):");
    intentos++;

    if (numeroUsuario === numeroAleatorio) {
        adivinado = true;
        alert(`¡Correcto! Adivinaste el número en ${intentos} intentos.`);
    } else if (numeroUsuario < numeroAleatorio) {
        alert("El número es mayor. Intenta de nuevo.");
    } else {
        alert("El número es menor. Intenta de nuevo.");
    }
}

// Ejercicio 11
function solicitarNumero(mensaje) {
    while (true) {
        let numero = parseInt(prompt(mensaje));
        if (!isNaN(numero) && numero >= 0) {
            return numero;
        } else {
            alert("Por favor, introduce un número entero válido mayor o igual a 0.");
        }
    }
}

function calcularFactorial(numero) {
    if (numero === 0) return 1;
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

let numero = solicitarNumero("Introduce un número entero para calcular su factorial:");
let factorial = calcularFactorial(numero);
alert(`El factorial de ${numero} es: ${factorial}`);

// Ejercicio 12
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function lanzarDados() {
    let dado1 = lanzarDado();
    let dado2 = lanzarDado();
    let suma = dado1 + dado2;

    if (suma === 7 || suma === 11) {
        return `Ganaste. Dados: ${dado1} y ${dado2}, Suma: ${suma}`;
    } else if (suma === 2 || suma === 3 || suma === 12) {
        return `Perdiste. Dados: ${dado1} y ${dado2}, Suma: ${suma}`;
    } else {
        return `Suma: ${suma}. Lanza de nuevo.`;
    }
}

let resultado = lanzarDados();
alert(resultado);

// Ejercicio 13
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 1000) + 1;
}

function solicitarNumero(mensaje) {
    while (true) {
        let numero = parseInt(prompt(mensaje));
        if (!isNaN(numero) && numero >= 1 && numero <= 1000) {
            return numero;
        } else {
            alert("Por favor, introduce un número válido entre 1 y 1000.");
        }
    }
}

let numeroAleatorio = generarNumeroAleatorio();
let intentos = 0;
let adivinado = false;

while (!adivinado) {
    let numeroUsuario = solicitarNumero("Adivina el número (entre 1 y 1000):");
    intentos++;

    if (numeroUsuario === numeroAleatorio) {
        adivinado = true;
        alert(`¡Correcto! Adivinaste el número en ${intentos} intentos.`);
    } else if (numeroUsuario < numeroAleatorio) {
        alert("El número es mayor. Intenta de nuevo.");
    } else {
        alert("El número es menor. Intenta de nuevo.");
    }
}

// Ejercicio 14
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function jugarCraps() {
    let dado1 = lanzarDado();
    let dado2 = lanzarDado();
    let suma = dado1 + dado2;

    if (suma === 7 || suma === 11) {
        return `Ganaste. Dados: ${dado1} y ${dado2}, Suma: ${suma}`;
    } else if (suma === 2 || suma === 3 || suma === 12) {
        return `Perdiste. Dados: ${dado1} y ${dado2}, Suma: ${suma}`;
    } else {
        let punto = suma;
        let sumaNueva;
        do {
            dado1 = lanzarDado();
            dado2 = lanzarDado();
            sumaNueva = dado1 + dado2;
        } while (sumaNueva !== 7 && sumaNueva !== punto);

        if (sumaNueva === punto) {
            return `Ganaste. Punto: ${punto}, Dados: ${dado1} y ${dado2}, Suma: ${sumaNueva}`;
        } else {
            return `Perdiste. Punto: ${punto}, Dados: ${dado1} y ${dado2}, Suma: ${sumaNueva}`;
        }
    }
}

let resultadoCraps = jugarCraps();
alert(resultadoCraps);

// Ejercicio 15
function obtenerDiferenciaDias(fecha1, fecha2) {
    let diferenciaTiempo = Math.abs(fecha2.getTime() - fecha1.getTime());
    let diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 3600 * 24));
    return diferenciaDias;
}

let fechaInicio = new Date(prompt("Introduce la primera fecha (aaaa-mm-dd):"));
let fechaFin = new Date(prompt("Introduce la segunda fecha (aaaa-mm-dd):"));
let diferenciaDias = obtenerDiferenciaDias(fechaInicio, fechaFin);
alert(`La diferencia entre las fechas es de ${diferenciaDias} días.`);

// Ejercicio 16
function obtenerDiaSemana(fecha) {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return diasSemana[fecha.getDay()];
}

let fechaUsuario = new Date(prompt("Introduce una fecha (aaaa-mm-dd):"));
let diaSemana = obtenerDiaSemana(fechaUsuario);
alert(`El día de la semana para la fecha introducida es: ${diaSemana}`);

// Ejercicio 17
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function solicitarNumero(mensaje) {
    while (true) {
        let numero = parseInt(prompt(mensaje));
        if (!isNaN(numero) && numero >= 1 && numero <= 100) {
            return numero;
        } else {
            alert("Por favor, introduce un número válido entre 1 y 100.");
        }
    }
}

let numeroAleatorio = generarNumeroAleatorio();
let intentos = 0;
let adivinado = false;

while (!adivinado) {
    let numeroUsuario = solicitarNumero("Adivina el número (entre 1 y 100):");
    intentos++;

    if (numeroUsuario === numeroAleatorio) {
        adivinado = true;
        alert(`¡Correcto! Adivinaste el número en ${intentos} intentos.`);
    } else if (numeroUsuario < numeroAleatorio) {
        alert("El número es mayor. Intenta de nuevo.");
    } else {
        alert("El número es menor. Intenta de nuevo.");
    }
}

// Ejercicio 18
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 1000) + 1;
}

function solicitarNumero(mensaje) {
    while (true) {
        let numero = parseInt(prompt(mensaje));
        if (!isNaN(numero) && numero >= 1 && numero <= 1000) {
            return numero;
        } else {
            alert("Por favor, introduce un número válido entre 1 y 1000.");
        }
    }
}

let numeroAleatorio = generarNumeroAleatorio();
let intentos = 0;
let adivinado = false;

while (!adivinado) {
    let numeroUsuario = solicitarNumero("Adivina el número (entre 1 y 1000):");
    intentos++;

    if (numeroUsuario === numeroAleatorio) {
        adivinado = true;
        alert(`¡Correcto! Adivinaste el número en ${intentos} intentos.`);
    } else if (numeroUsuario < numeroAleatorio) {
        alert("El número es mayor. Intenta de nuevo.");
    } else {
        alert("El número es menor. Intenta de nuevo.");
    }
}
