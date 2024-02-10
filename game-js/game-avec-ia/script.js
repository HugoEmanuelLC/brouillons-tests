// Créer le canvas
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Créer un objet pour représenter le vaisseau du joueur
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    color: 'white',
    speed: 5, // Vitesse de déplacement du joueur
    draw: function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    },
    moveUp: function() {
        this.y -= this.speed;
    },
    moveDown: function() {
        this.y += this.speed;
    },
    moveLeft: function() {
        this.x -= this.speed;
    },
    moveRight: function() {
        this.x += this.speed;
    }
};

// Créer un tableau pour stocker les astéroïdes
const asteroids = [];

// Fonction pour créer un astéroïde
function createAsteroid() {
    const asteroid = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 50 + 10,
        color: 'gray',
        draw: function() {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            context.fillStyle = this.color;
            context.fill();
            context.closePath();
        }
    };
    asteroids.push(asteroid);
}

// Fonction pour dessiner tous les astéroïdes
function drawAsteroids() {
    asteroids.forEach(function(asteroid) {
        asteroid.draw();
    });
}

// Fonction pour mettre à jour le jeu à chaque frame
function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    drawAsteroids();
    requestAnimationFrame(update);
}

// Générer les astéroïdes initiaux
for (let i = 0; i < 10; i++) {
    createAsteroid();
}

// Lancer le jeu
update();

// Gérer les événements de déplacement du joueur
document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 38: // Flèche haut
            player.moveUp();
            break;
        case 40: // Flèche bas
            player.moveDown();
            break;
        case 37: // Flèche gauche
            player.moveLeft();
            break;
        case 39: // Flèche droite
            player.moveRight();
            break;
    }
});
