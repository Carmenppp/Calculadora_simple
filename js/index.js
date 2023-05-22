//seleccionar los elementos html que necesitamos
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const numerosBotones = document.querySelectorAll('.botones__b');
const numerosOperadores = document.querySelectorAll('.botones__op');

const display = new Display(displayValorAnterior, displayValorActual);

numerosBotones.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

numerosOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});



