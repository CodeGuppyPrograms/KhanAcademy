// Color lava lamp program adapted from the code at
// https://codeguppy.com/code.html?t=lavalamp_color
// ---------------------------------------------------------------
// https://codeguppy.com contains many programs for kids and teens
// that can be ported to Khan Academy due to
// similarities between the platforms
// ---------------------------------------------------------------

// Set this variable to 1 OR 2
var displayStyle = 2;

var w = 40;
var h = 40;
var mult = 500;
var scaleX = width / w;
var scaleY = height / h;

colorMode(HSB);
noStroke();

var balls = [];

for(var i = 0; i < 5; i++)
{
    balls.push({ x : random(w), y : random(h), dx : random(1, 2), dy : random(1,2)});
}

var update = function()
{
    for(var i = 0; i < balls.length; i++)
    {
        var b = balls[i];
        
        b.x += b.dx;
        b.y += b.dy;
        
        if (b.x > w || b.x < 0) {
            b.dx *= -1;
        }
            
        if (b.y > h || b.y < 0) {
            b.dy *= -1;
        }
    }
};

var displayDot = function(x, y, col)
{
    fill(col, 255, 255);
    
    switch(displayStyle)
    {
        case 0:
            rect(x, y, 1, 1);
            break;
        case 1:
            rect(x * scaleX, y * scaleY, scaleX, scaleY);
            break;
        case 2:
            ellipse(x * scaleX + scaleX / 2, y * scaleY + scaleY / 2, scaleX, scaleY);
            break;
    }
};

var display = function()
{
    for(var x = 0; x < w; x++)
    {
        for(var y = 0; y < h; y++)
        {
            var sum = 0;
            
            for(var i = 0; i < balls.length; i++)
            {
                var b = balls[i];
                sum += 1 / dist(x, y, b.x, b.y);
            }

            var col = mult * sum;
            displayDot(x, y, col);
        }
    }
};

var draw = function()
{
    update();
    display();
};
