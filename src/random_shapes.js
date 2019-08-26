// Program adapted from the code at
// https://codeguppy.com/code.html?t=random_shapes
// ---------------------------------------------------------------
// https://codeguppy.com contains many programs for kids and teens
// that can be adapted to Khan Academy
// due to similarities between the platforms
// ---------------------------------------------------------------

// Press mouse the change the drawings...

var noShapes = 1;
var currFunction = 0;
noFill();

var circle = function(x, y, r) {
    var d = r * 2;
    ellipse(x, y, d, d);
};

var randomLine1 = function()
{
    var y = random(height);
    
    stroke(random(255), random(255), random(255));
    line(0, y, width, y);
};

var randomLine2 = function()
{
    var x = random(width);
    
    stroke(random(255), random(255), random(255));
    line(x, 0, x, height);
};

var randomLine3 = function()
{
    var x1 = random(width);
    var y1 = random(height);
    
    var x2 = random(width);
    var y2 = random(height);
    
    stroke(random(255), random(255), random(255));
    line(x1, y1, x2, y2);
};


var randomCircle = function()
{
    var x = random(width);
    var y = random(height);
    
    var r = random(100);
    
    stroke(random(255), random(255), random(255));
    circle(x, y, r);
};


var randomCircles = function()
{
    var x = random(width);
    var y = random(height);
    
    var r = random(100);
    
    for(var i = 0; i <= r; i++)
    {
        stroke(random(255), random(255), random(255));
        circle(x, y, i);
    }
};

var randomEllipse = function()
{
    var x = random(width);
    var y = random(height);
    
    var d1 = random(100);
    var d2 = random(100);
    
    stroke(random(255), random(255), random(255));
    ellipse(x, y, d1, d2);
};


var randomRect = function()
{
    var x = random(width);
    var y = random(height);
    
    var w = random(100);
    var h = random(100);
    
    stroke(random(255), random(255), random(255));
    rect(x, y, w, h);
};


var randomTriangle = function()
{
    var x = random(width);
    var y = random(height);
    
    var dx1 = random(-100, 0);
    var dy1 = random(100);

    var dx2 = random(100);
    var dy2 = random(100);

    stroke(random(255), random(255), random(255));
    triangle(x, y, x + dx1, y + dy1, x + dx2, y + dy2);
};


var arFunctions = [ randomLine1, randomLine2, randomLine3, randomCircle, randomCircles, randomRect, randomTriangle, randomEllipse ];

var mouseClicked = function()
{
    background(255, 255, 255);
    currFunction = (currFunction + 1) % arFunctions.length;
};

var drawFrame = function()
{
    var fn = arFunctions[ currFunction ];
    
    for(var i = 0; i < noShapes; i++)
    {
        fn();
    }
};


var draw = function()
{
    drawFrame();
};
