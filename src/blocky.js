// Adapted from Blocky tutorial at
// https://codeguppy.com/code.html?t=blocky
// -----------------------------------------------------------
// https://codeguppy.com contains many kids and teens programs
// that can be adapted and ported 
// to Khan Academy
// ------------------------------------------------------------

var squareSize = 16;
var noRows = 20;
var noCols = 20;

// Display the grid paper using a series of white rectangles
var displayGridPaper = function()
{
    for(var row = 0; row < noRows; row++)
    {
        for(var col = 0; col < noCols; col++)
        {
            var x = col * squareSize;
            var y = row * squareSize;

            fill(255, 255, 255);
            rect(x, y, squareSize, squareSize);
        }
    }
};

// Display the cell that contains the point (x, y)
var displayCell = function(x, y)
{
    var col = floor( x / squareSize );
    var row = floor( y / squareSize );

    if (col >= noCols || row >= noRows) {
        return;
    }

    // determine the cell left upper-corner x and y coordinates
    var cellX = col * squareSize;
    var cellY = row * squareSize;

    rect(cellX, cellY, squareSize, squareSize);
};

var draw = function() 
{
    // Call to displayCell at mouse coordinates, only if mouse is pressed
    if (mouseIsPressed)
    {
        //var color = mouseButton === LEFT ? color(0, 0, 0) : color(255, 255, 255);
        
        if (mouseButton === LEFT)
        {
            fill(0, 0, 0);
        }
        else
        {
            fill(255, 255, 255);
        }
        
        displayCell(mouseX, mouseY);
    }
};

displayGridPaper();
