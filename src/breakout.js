// Program adapted from code at
// https://codeguppy.com/code.html?t=breakout
// ----------------------------------------------------------
// https://codeguppy.com contains programs for kids and teens
// You can port these programs to Khan Academy due to 
// similarities between the platforms
// ----------------------------------------------------------

var paddleWidth = 60;
var brickWidth = 50;
var brickHeight = 20;
var brickSpace = 20;
var rowSpace = 10;

var xPaddle;
var yPaddle;

var ball;
var ballsLeft;

var bricks = [];

var collisionCircleRect = function(circleX, circleY, circleR, rectX, rectY, rectWidth, rectHeight)
{
    var px = max(rectX, min(circleX, rectX + rectWidth));
    var py = max(rectY, min(circleY, rectY + rectHeight));

    return dist(px, py, circleX, circleY) < circleR;
};

var initBall = function()
{
    xPaddle = width / 2;
    yPaddle = height - 20;

    ball = {
        radius : 5,
        x : 0,
        y : 0,
        xvel : 5,
        yvel : -5,
        inMotion : false
    };
};

var createBricks = function()
{
    var noBricks = Math.floor((width - brickSpace) / ( brickWidth + brickSpace ));
    var arBricks = [];

    for(var row = 0; row < 3; row++)
    {    
        for(var col = 0; col < noBricks; col++ )
        {
            var x = col * ( brickWidth + brickSpace ) + brickSpace;
            var y = row * (brickHeight + rowSpace) + rowSpace;
            
            var brick = { x : x, y : y };
            arBricks.push(brick);
        }
    }

    return arBricks;
};


var initGame = function()
{
    bricks = createBricks();
    ballsLeft = 3;
    
    initBall();
};


// Iterate through all the bricks and check
// if the ball hits any bricks.
// Returns the index of the brick that is hit ... or -1
var getHitBrick = function()
{
    for(var i = 0; i < bricks.length; i++)
    {
        var brick = bricks[i];

        if ( collisionCircleRect( ball.x, ball.y, ball.radius, brick.x, brick.y, brickWidth, brickHeight ) )
        {
            return i;
        }
    }

    return -1;
};

var updateBallInMotion = function()
{
    ball.x += ball.xvel;
    ball.y += ball.yvel;

    if ( ball.x < 0 || ball.x > width )
    {
        ball.xvel *= -1;
    }
    else if ( ball.y < 0 )
    {
        ball.yvel *= -1;
    }
    else if ( collisionCircleRect(ball.x, ball.y, ball.radius, xPaddle, yPaddle, paddleWidth, 10) )
    {
        ball.yvel *= -1;
    }
    else if ( ball.y > height )
    {
        ballsLeft--;
        
        if (ballsLeft >= 0)
        {
            initBall();
        }
        else
        {
            initGame();
        }
    }
};

var updateBall = function()
{
    if ( !ball.inMotion )
    {
        ball.x = xPaddle + paddleWidth / 2;
        ball.y = yPaddle - ball.radius;
    }
    else
    {
        updateBallInMotion();
    }
};





var checkForCollision = function()
{
    var brickIndex = getHitBrick();
    if ( brickIndex === -1 )
    {
        return;
    }

    bricks.splice(brickIndex, 1);
    ball.yvel *= -1;

    if ( bricks.length === 0 )
    {
        initGame();
    }
};

var readKeys = function()
{
    if ( keyIsPressed && keyCode === 37 && xPaddle > 0  ) // Left
    {
        xPaddle -= 5;
    }
    else if ( keyIsPressed && keyCode === 39 && xPaddle < width - paddleWidth ) // Right
    {
        xPaddle += 5;
    }
    else if ( keyIsPressed && key.code === 32 )  // SPACE
    {
        ball.inMotion = true;
    }
};

var displayBall = function()
{
    fill(150, 35, 207);
    ellipse( ball.x, ball.y, ball.radius * 2, ball.radius * 2 );
};

var displayBricks = function()
{
    fill(201, 96, 201);
    for(var i = 0; i < bricks.length; i++)
    {
        var brick = bricks[i];
        rect( brick.x, brick.y, brickWidth, brickHeight );
    }
};

var displayPaddle = function()
{
    fill(123, 25, 156);
    rect( xPaddle, yPaddle, paddleWidth, 10 );
};

var displayStats = function()
{
    pushMatrix();
    fill(0, 0, 0);
    noStroke();

    text("Balls: " + ballsLeft, 10, height - 20);
    text("Bricks: " + bricks.length, 10, height - 6);

    popMatrix();
};


initGame();

var draw = function()
{
    background(161, 217, 198);

    readKeys();
    displayBricks();
    displayPaddle();

    updateBall();
    displayBall();

    checkForCollision();

    displayStats();
};
