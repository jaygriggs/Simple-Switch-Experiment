
/* For Nintendo Switch: Color Experiment Author Jay Griggs 2018*/
var sdl = require("sdl");
var game = require("game");
var input = require("input");

var redColor = Number("001");
sdl.setFPS(80);
sdl.setBackground({ R: 0, G: 0, B: 0, A: 0 });

function addColor()
{
if (redColor > 10){
sdl.setBackground({ R: redColor, G: 0, B: 0, A: 0 });
}
}

game.mainLoop(function()
{
 var key = input.getHeld();
 if (key == input.A)
    { 
    redColor++; 
    }
addColor();

});
