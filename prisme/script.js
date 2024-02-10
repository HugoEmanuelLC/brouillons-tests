const body = document.querySelector('body')
const blocs = document.querySelector('.blocs')
const bloc = document.querySelector('.bloc')
let mouseX = 0
let mouseY = 0
const rotationValue = 800;

const handleMouseMove = (event) => {
    bloc.classList.remove('bloc_animed')
    blocs.classList.remove('blocs_animed')
    mouseX = event.clientX;
    mouseY = event.clientY;
    rotateX = -(mouseY / window.innerHeight / 0.5) * rotationValue
    rotateY = -(mouseX / window.innerWidth - 0.5) * rotationValue
    
    bloc.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    // background
    blocs.style.backgroundPositionX = `${rotateY}px`
}

blocs.addEventListener("mousemove", (ev) => {
    handleMouseMove(ev)
});
// bloc.addEventListener("mousemove", (ev)=>{handleMouseMove(ev)});

blocs.addEventListener("mouseout", (ev) =>{
    if (ev.target.classList == 'link' || ev.target.classList == 'bloc') {
        console.log(true);
    } else {
        bloc.classList.add('bloc_animed')
        blocs.classList.add('blocs_animed')
    }
});

