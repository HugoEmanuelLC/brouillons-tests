
const blocs = document.querySelector('.blocs')
const bloc = blocs.querySelector('.bloc')
let mouseX = 0
let mouseY = 0
const rotationValue = 1000;

const handleMouseMove = (event) => {
    bloc.classList.remove('bloc_animed')
    blocs.classList.remove('blocs_animed')
    mouseX = event.clientX;
    mouseY = event.clientY;
    rotateX = -(mouseY / window.innerHeight / 0.7) * rotationValue
    rotateY = -(mouseX / window.innerWidth - 0.4) * rotationValue
    
    bloc.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    // background
    blocs.style.backgroundPositionX = `${rotateY}px`
}


// LAPTOP
blocs.addEventListener("mousemove", (ev) => handleMouseMove(ev));

blocs.addEventListener("mouseout", (ev) =>{
    if (ev.target.classList == 'link' || ev.target.classList == 'bloc') {
        console.log(true);
    } else {
        bloc.classList.add('bloc_animed')
        blocs.classList.add('blocs_animed')
    }
});



// touch mobile 
blocs.addEventListener("touchmove", (ev) => {
    [...ev.changedTouches].forEach(touch => {
        handleMouseMove(touch)
        blocs.querySelector('h1').style.fontSize = 0
    })
})

blocs.addEventListener("touchstart", (ev) =>{
    [...ev.changedTouches].forEach(touch =>{
        if (touch.target.classList == 'link' || touch.target.classList == 'bloc') {
            console.log(true);
        } else {
            bloc.classList.add('bloc_animed')
            blocs.classList.add('blocs_animed')
            blocs.querySelector('h1').style.fontSize = '10vw'
        }
    })
});