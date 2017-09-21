
var init = function () {
  var canvas= document.getElementById('launch-screen');
  var ctx = canvas.getContext('2d')
  ctx.fillStyle = "#428711";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(Resources.get('images/bg.png'), 0, 0);
  ctx.drawImage(Resources.get('images/char-boy.png'), 160, 250);
  ctx.drawImage(Resources.get('images/char-pink-girl.png'), 260, 250);
  ctx.font = "bold 20px Arial";
  ctx.fillText("Press 1 to chose Boy and press 2 to chose Girl",20,430);
}
Resources.load([
  'images/char-boy.png',
  'images/char-pink-girl.png',
  'images/bg.png'
]);
Resources.onReady(init);

document.addEventListener('keyup', function(e) {

  var allowedKeys = {
    49: 'boy',
    50: 'girl'
  };
  var character;
  switch (allowedKeys[e.keyCode]) {
    case 'girl':
    character = 'girl';
    break;
    case 'boy':
    character = 'boy';
    break;
  };
  window.location.href ="arcade.html?char="+character;
});
