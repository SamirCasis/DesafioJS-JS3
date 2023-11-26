/* Inicio Punto 2, Desafio 3 JS

function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar); */


const ele1 = document.getElementById('ele1');
const pintar = (ele1, color = 'green')

ele1.addEventListener = ('click', (pintar) => {
    ele1.style.color = 'yellow'
    return
})

cambiaColor =

    cambiaColor1 = ('click', () => {
        const d1 = document.getElementById('d1')
        d1.style.backgroundColor = 'black'
        return
    })

//Inicio Punto 3, Desafio 3 JS


/* const divRed = document.querySelector('#d2')
const divGreen = document.querySelector('#d3')
const divYellow = document.querySelector('#d4')
const divKey = document.querySelector('#dvkey') */
const divBlue = document.querySelector('#d1')
const cambiarColor = (e) => { e.target.style.backgroundColor = 'black' }
divBlue.addEventListener('click', cambiarColor)
/* divRed.addEventListener('click', cambiarColor)
divGreen.addEventListener('click', cambiarColor)
divYellow.addEventListener('click', cambiarColor)
 */

