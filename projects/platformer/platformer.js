$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(45,187, 153, 8)
createPlatform(276, 320, 170, 8)
createPlatform(27, 420, 153, 8)
createPlatform(550, 235, 153, 8)
createPlatform(740, 340, 155, 8)
createPlatform(940, 430, 155, 8)
createPlatform(775, 500, 170, 8)
createPlatform(600, 450, 155, 8)
createPlatform(1000, 630, 155, 8)

createPlatform(550, 228, 10, 120)
createPlatform(1200, 500, 10, 1000)

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
createCollectable("database", 335, 280)
createCollectable("database", 80, 380)
createCollectable("database", 600, 195)
createCollectable("database", 795, 300)
createCollectable("database", 995, 390)
createCollectable("database", 835, 460)
createCollectable("database", 660, 410)
createCollectable("database", 400, 700)
createCollectable("database", 1285, 700)
createCollectable("database", 1185, 464)
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
createCannon("left", 75, 500)
createCannon("top", 420, 700)
createCannon("top", 700,950)
createCannon("right", 450, 900)
createCannon("left", 630, 1200)
createCannon("top", 600, 1200)
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
