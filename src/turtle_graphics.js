// Turtle graphics program adapted from code at
// https://codeguppy.com/code.html?t=turtle_graphics
// ----------------------------------------------------------
// https://codeguppy.com contains programs for kids and teens
// You can port these programs to Khan Academy due to
// similarities between the platforms
// ----------------------------------------------------------

var turtle;
fill(0, 0, 0);

var home = function()
{
    if (!turtle) {
        turtle = {};
    }
    
    turtle.x = width / 2;
    turtle.y = height / 2;
    turtle.angle = 0;
    
    turtle.pen = true;
    turtle.pencolor = "Black";
};

var setpencolor = function(pencolor)
{
    turtle.pencolor = pencolor;
};

var pendown = function()
{
    turtle.pen = true;
};

var penup = function()
{
    turtle.pen = false;
};

var repeat = function(n, fn)
{
    for(var i = 0; i < n; i++)
    {
        fn(i);
    }
};

var setXY = function(x, y)
{
    turtle.x = x;
    turtle.y = y;
};

var left = function(angle)
{
    turtle.angle -= angle;
};

var right = function(angle)
{
    turtle.angle += angle;
};

var forward = function(d)
{
    // apply -90 correction since in logo 0 degrees is up
    var x2 = turtle.x + d * cos(turtle.angle - 90);
    var y2 = turtle.y + d * sin(turtle.angle - 90);
    
    if (turtle.pen)
    {
        stroke(0, 0, 0);
        line(turtle.x, turtle.y, x2, y2);
    }
    
    turtle.x = x2;
    turtle.y = y2;
};

var back = function(d)
{
    forward(-d);
};

// -----------------

// Turtle graphics examples translated from LOGO examples
// from: http://fmslogo.sourceforge.net/workshop/

var spiral = function()
{
    repeat(100, function(repcount){
        forward(repcount * 2);
        right(90);
    });
};


var sawblade = function()
{
    var sawtooth = function()
    {
        right(45);
        forward(56.56);
        left(135);
        forward(40);
        right(90);
    };

    repeat(12, function(){
        sawtooth();
        right(30);
    });
};


// snowflake(200, 4);
var snowflake = function(length, depth)
{
    var snowflake_side = function(length, depth)
    {
        if (depth === 0)
        {
            forward(length);
            return;
        }
        
        snowflake_side(length / 3, depth - 1);
        
        left(60);
        snowflake_side(length / 3, depth - 1);
        
        right(120);
        snowflake_side(length / 3, depth - 1);
        
        left(60);
        snowflake_side(length / 3, depth - 1);
    };
    
    repeat(3, function(){
        snowflake_side(length, depth);
        right(120);
    });
};


//plant(100, 0);
var plant = function(size, angle)
{
    if(size < 1) {
        return;
    }
        
    right(angle);
    forward(size);
    
    repeat(4, function(){
        plant(size / 2, random(160) - 80);
    });
    back(size);
    left(angle);
};


// triangle_fractal(200, 4);
var triangle_fractal = function(length, depth)
{
    if(depth === 0)
    {
        forward(length);
        return;
    }
    
    repeat(3, function(){
        forward(length / 3);
        triangle_fractal(length / 3, depth - 1);
        forward(length / 3);
        
        right(120);
    });
};

var square = function()
{
    forward(100);
    left(90);
    forward(100);
    left(90);
    forward(100);
    left(90);
    forward(100);
};


var square_flower = function()
{
    repeat(18, function(){
        square();
        right(20);
    });
};

var spiro = function()
{
    repeat(30, function(){
        forward(100);
        right(156);
    });
};

var plant100 = function() {
    plant(100, 0);
};

var snowflake200 = function() {
    snowflake(200, 4);
};

var trianglefractal200 = function() {
    triangle_fractal(200, 4);
};

var ar = [
        plant100,
        spiral, 
        sawblade, 
        snowflake200,
        trianglefractal200,
        square_flower,
        spiro
    ];


// ------------------

home();

var draw = function()
{
    background(255, 255, 255);
    home();
    
    var x = constrain(mouseX, 0, width - 1);
    var n = round(map(x, 0, width - 1, 0, ar.length - 1));
    
    ar[n]();
    
    text(n + 1 + " / " + ar.length + " (move mouse to change the drawing).", 10, height - 10);
};
