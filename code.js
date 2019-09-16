var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball = createSprite(200, 200,10,10);
var target = createSprite(330, 10, 80, 10);
var obstacle1 = createSprite(10, 50,300,10);
var obstacle2 = createSprite(320,50, 250,10);
ball.velocityX = 2;
ball.velocityY = 2;

target.shapeColor="red";


function draw() {
  background("green");
 
  
  if (keyDown("up")) {
  //ball.velocityX = 0;
  //ball.velocityY = -2;
  ball.velocityX = 0;
  ball.velocityY = -2;
  }
  
   
  if (keyDown("down")) {
  //ball.velocityX = 0;
  //ball.velocityY = 2;
  ball.velocityX = 0;
  ball.velocityY = 2;
  }
  
   
  if (keyDown("left")) {
  //ball.velocityX = -2;
  //ball.velocityY = 0;
  ball.velocityX = -2;
  ball.velocityY = 0;
  }
  
   
  if (keyDown("right")) {
  //ball.velocityX = 2;
  //ball.velocityY = 0;
  ball.velocityX = 2;
  ball.velocityY = 0;
  }
  text("Push me out of screen", 270, 30);
 
  
  ball.bounce(target);
  if (target.x>400||target.x<0||target.y>400||target.y<0) {
    text("You Win", 180, 200);
  }
  ball.collide(obstacle1);
  ball.collide(obstacle2);
  
   
  //createEdgeSprites();
  //ball.bounceOff(edges);
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
