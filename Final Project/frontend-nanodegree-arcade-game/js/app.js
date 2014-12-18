// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //6 linhas, monstro aparecem só na 2,3 e 4 (de 0 a 5).
    //5 colunas
    //this.y = Math.floor((Math.random() * 3) + 1)*83;
    this.generateLine();
    this.generateCollum();
}

Enemy.prototype.generateLine = function(){
    this.y = Math.floor((Math.random() * 3) + 1)*83;
}

Enemy.prototype.generateCollum = function(){
    this.x = Math.floor((Math.random() * 500) + 1);
    this.x = this.x * -1;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x+(101*dt);
    if(this.x > 505){
        this.generateCollum();
        this.generateLine();
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 2;
    this.y = 5;
    /*
    1 - North
    2 - South
    3 - East
    4 - West
    Else - Stop
    */
    this.way = 0;
}
Player.prototype.update = function(){
    switch(this.way){
        case 1:
            this.y--;
            this.way = 0;
            break;
        case 2:
            this.y++;
            this.way = 0;
            break;
        case 3:
            this.x--;
            this.way = 0;
            break;
        case 4:
            this.x++;
            this.way = 0;
            break;
    }

    if(this.way == 1){
        this.y--;
        this.way = 0;
    }

}
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
}
Player.prototype.handleInput = function(e){
    switch(e){
        case 'left':
            this.way = 3;
            break;
        case 'right':
            this.way = 4;
            break;
        case 'up':
            this.way = 1;
            break;
        case 'down':
            this.way = 2;
            break;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var qtEnemies = 5;
var allEnemies = [];
for(var i = 0; i < qtEnemies; i++){
    var enemy = new Enemy();
    allEnemies.push(enemy);
}

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
