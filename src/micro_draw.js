// Adapted and ported from https://codeguppy.com/code.html?t=draw
// https://codeguppy.com - a site with programs for kids and teens

fill(0);
text("Use mouse to draw. Press 1 - 2 - 3 to change color.", 10, 10);

strokeWeight(5);

var draw = function()
{
    if (mouseIsPressed)
    {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
};

var keyPressed = function() {
    if (key.toString() === '1')
    {
        stroke(0, 0, 0);
    }
    else if (key.toString() === '2')
    {
        stroke(0, 0, 255);
    }
    else if (key.toString() === '3')
    {
        stroke(255, 0, 0);
    }
};
