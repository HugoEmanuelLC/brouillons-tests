

const plateau = document.querySelector('.plateau')

let X = 0;
let Y = 0;

function Player(x=X, y=Y) {
    plateau.innerHTML = ""
    let createPlayer = document.createElement('div')
    createPlayer.classList = "player"
    plateau.append(createPlayer)
    let player = document.querySelector('.player')
    player.style.transform = `translateX(${x}px) translateY(${y}px)`
}
Player()

function mouve(params) {
    switch (params.key) {
        case "ArrowUp":
            Y -= 10
            Player()
            break;
        case "ArrowDown":
            Y += 10
            Player()
            break;
        case "ArrowRight":
            X += 10
            Player()
            break;
        case "ArrowLeft":
            X -= 10
            Player()
            break;
    
        default:
            break;
    }
}

document.addEventListener('keydown',(e)=>{
    mouve(e)
})