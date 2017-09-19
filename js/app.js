// Enemies our player must avoid
var wins,loser;
var score =0;
var Enemy = function(x,y) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  this.y=y;
  this.x=x;
  this.speed= Math.floor(Math.random() * (30 - 6) + 6);
  this.width=171;
  this.height=101;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  if (this.x<450)
  this.x+= this.speed * dt;
  else
  this.x=Math.random() * (-50 - 0) - 50;

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.checkCollisions = function()
{
  if (this.x < player.x + player.width/2.5 &&
    this.x + this.width/2.5 > player.x &&
    this.y < player.y + player.height/2.5 &&
    this.height/2.5 + this.y > player.y)
    {
      loser=true;
      audio_loser.play();
      setTimeout(function(){ player.reset(); }, 2000);

    }
  }
  // Now write your own player class
  // This class requires an update(), render() and
  // a handleInput() method.
  var Player = function ()
  {
    this.character = 'images/char-boy.png';
    this.x=200;
    this.y=400;
    this.width=171;
    this.height=101;
  }

  Player.prototype.update = function () {
    if(this.y<0)
    {
      wins =true;
      audio_winning.play();
      setTimeout(function(){ player.reset(); }, 2000);
    }

  }
  Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.character), this.x, this.y);
  }
  Player.prototype.handleInput =function (key)
  {
    switch(key) {
      case 'left':
      if(this.x>0)
      this.x = this.x - 100;
      break;
      case 'up':
      if(this.y>36)
      this.y = this.y - 90;
      break;
      case 'right':
      if(this.x<400)
      this.x = this.x + 100;
      break;
      case 'down':
      if(this.y<400)
      this.y = this.y + 90;
      break;
    }
  }


  Player.prototype.reset =function() {
    loser=false;
    wins=false;
    this.x=200;
    this.y=400;
  }
  // Now instantiate your objects.
  // Place all enemy objects in an array called allEnemies
  // Place the player object in a variable called player
  var player = new Player();
  var enemy1 = new Enemy(400,220);
  var enemy2 = new Enemy(0,220);
  var enemy3 = new Enemy(220,140);
  var enemy4 = new Enemy(100,50);
  var enemy5 = new Enemy(300,150);
  var allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5];
  var audio_loser = new Audio('sounds/loser.mp3');
  var audio_winning = new Audio('sounds/winning.mp3');
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
