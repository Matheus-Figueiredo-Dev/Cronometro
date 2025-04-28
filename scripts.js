let number = 0;
let cont;
const h1 = document.querySelector('h1');

function start() {
    clearInterval(cont);
    cont = setInterval(() => {
        number++;
        h1.innerHTML = formatCron(number);
    }, 1000)
}

function stop() {
    clearInterval(cont);
}

function reset() {
    clearInterval(cont);
    number = 0;
    refresh();
}

function refresh() {
    document.querySelector('h1').innerHTML = formatCron(number);
}

function formatCron(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    const formatoHoras = String(horas).padStart(2, '0');
    const formatoMinutos = String(minutos).padStart(2, '0');
    const formatoSegundos = String(segundosRestantes).padStart(2, '0');

    return `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
}