const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
canvas.width = innerWidth - 10
canvas.height = innerHeight - 10
const ctx = canvas.getContext('2d')

const ship_img_url = './ship.png'
const meteor_img_url = './meteor.png'
const KEYS = {}

class Ship{
    constructor(){
        this.position = {
            x: canvas.width / 2,
            y: canvas.height / 2
        }
        this.w = 90
        this.h = 80

        this.velocity = {
            x: 0,
            y: 0
        }
        this.friction = 0.9

        this.image = new Image()
        this.image.src = ship_img_url
        this.image.onload = this.draw
    }

    wathBorders(){
        if (this.position.x < 0 - this.w) {
            this.position.x = canvas.width
        } else if(this.position.x > canvas.width + this.w) {
            this.position.x = 0 - this.w
        }
        
        if (this.position.y < 0 - this.h) {
            this.position.y = canvas.height
        } else if(this.position.y > canvas.height + this.h) {
            this.position.y = 0 - this.h
        }
    }

    move(){
        if (KEYS['ArrowLeft']) {
            this.velocity.x--            
        } else if(KEYS['ArrowRight']){
            this.velocity.x++ 
        }

        if (KEYS['ArrowUp']) {
            this.velocity.y--
        } else if (KEYS['ArrowDown']){
            this.velocity.y++
        }
        this.position.x += this.velocity.x
        this.velocity.x *= this.friction
        this.position.y += this.velocity.y
        this.velocity.y *= this.friction
        this.wathBorders()
    }

    update(){
        // this.test = console.log("test");
        this.draw()
        this.move()
    }

    draw(){
        if (!this.image) { return }
        // rotation
        ctx.save()
        if (KEYS['ArrowLeft']) {
            ctx.translate(this.position.x + this.w / 2, this.position.y + this.h / 2)
            ctx.rotate(-0.30)
            ctx.translate(-this.position.x - this.w / 2, - this.position.y - this.h / 2)
        }
        
        if (KEYS['ArrowRight']) {
            ctx.translate(this.position.x + this.w / 2, this.position.y + this.h / 2)
            ctx.rotate(0.30)
            ctx.translate(-this.position.x - this.w / 2, - this.position.y - this.h / 2)
        }
        ctx.drawImage(this.image, this.position.x, this.position.y, this.w, this.h)
        ctx.restore()
    }
}

let drawMeteorX = Math.floor(Math.random()*canvas.width)
let drawMeteorY = 0
const drawMeteor = (number = 5) => {
    for (let i = 0; i < number; i++) {
        image = new Image()
        image.src = meteor_img_url
        ctx.drawImage(image, drawMeteorX, drawMeteorY, 50, 100)
        if (drawMeteorY > canvas.height ) {
            drawMeteorX = Math.floor(Math.random()*canvas.width)
            drawMeteorY = -200
        } else {
            drawMeteorY += 2
        }
    }
}

let isPaused = false; // Variable to track game state

// ...

const coliision = () => {
    if (drawMeteorX > ship.position.x && 
        drawMeteorX < ship.position.x + ship.w && 
        drawMeteorY > ship.position.y && drawMeteorY < ship.position.y + ship.h) {
        
        isPaused = true; // Pause the game when there is a collision
        ship.image = new Image();
        ship.image.src = 'the_end.png';
        ctx.drawImage(ship.image, ship.position.x, ship.position.y, ship.w, ship.h);
    }
}



// ...

const update = () => {
    if (isPaused) {
        return; // Exit the update loop if the game is paused
    }

    // Rest of the update logic
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBG()
    drawMeteor()
    coliision()
    ship.update()
    requestAnimationFrame(update)
}

// ...

const drawStars = (number = 1)=>{
    for (let i = 0; i < number; i++) {
        let x = Math.floor(Math.random()*canvas.width)
        let y = Math.floor(Math.random()*canvas.height)
        ctx.fillStyle = 'white'
        ctx.fillRect(x,y,3,5)
        ctx.fillRect(x,y,5,3)
    }
}

const drawBG = () => {
    ctx.fillStyle = '#323232'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    drawStars(1)
}

// instances
const ship = new Ship()



addEventListener('keydown', (e)=>{
    KEYS[e.key] = true
})
addEventListener('keyup', (e)=>{
    KEYS[e.key] = false
})

update()