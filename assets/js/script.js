//Inicio Punto 3, Desafio 3 JS

const divBlue = document.querySelector('#d1');
const divRed = document.querySelector('#d2');
const divGreen = document.querySelector('#d3');
const divYellow = document.querySelector('#d4');
const key = document.querySelector('#key');

const changeColor = (e) => (e.target.style.backgroundColor = 'black');

divBlue.addEventListener('click', changeColor);
divRed.addEventListener('click', changeColor);
divGreen.addEventListener('click', changeColor);
divYellow.addEventListener('click', changeColor);

function createNuevoDiv(color) {
    const nuevoDiv = document.createElement('Div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.marginBottom = '20px';
    document.body.appendChild(nuevoDiv);
};

document.addEventListener('keydown', function (e) {
    if (e.key === 'a') {
        key.style.backgroundColor = 'pink';
    } else if (e.key === 's') {
        key.style.backgroundColor = 'orange';
    } else if (e.key === 'd') {
        key.style.backgroundColor = 'skyblue';
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'q') {
        createNuevoDiv('purple');
    } else if (e.key === 'w') {
        createNuevoDiv('gray');
    } else if (e.key === 'e') {
        createNuevoDiv('brown');
    }
});

//Inicio Punto 2, Desafio 3 JS

const ele = document.querySelector('#ele1')

const pintar = (color) => {
    ele.style.backgroundColor = color;
}

pintar('green')

ele.addEventListener('click', () => {
    pintar('yellow')
})