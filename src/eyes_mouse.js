// This program has been adapted from the code at
// https://codeguppy.com/code.html?t=eyes_mouse
// ---------------------------------------------------------------
// https://codeguppy.com contains many programs for kids and teens
// that can be adapted to Khan Academy due to similarities
// between the platforms
// ---------------------------------------------------------------

// Use cartesian - polar coordinates conversion to implement
// eyes that follow mouse coursor

// Draw eyes that follow the mouse position
var drawEyePupil = function(x1, y1, r, pr)
{
    var angle = atan2(mouseY - y1, mouseX - x1);

    var x2 = x1 + r * cos(angle);
    var y2 = y1 + r * sin(angle);

    fill(0, 0, 0);
    ellipse(x2, y2, pr, pr);
};

var drawEye = function(x, y, r)
{
    fill(255, 255, 255);
    ellipse(x, y, r * 2, r * 2);

    drawEyePupil(x, y, 0.75 * r, 0.5 * r);
};


var draw = function()
{
    background(255, 255, 255);

    drawEye(100, height / 2, 60);
    drawEye(280, height / 2, 60);
};
