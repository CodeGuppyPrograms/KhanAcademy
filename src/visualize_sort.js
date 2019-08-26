// Visualizing Bubble Sort algorithm was adapted from code at
// https://codeguppy.com/code.html?t=visual_sort
// ---------------------------------------------------------------
// https://codeguppy.com contains programs for kids and teens that
// can be adapted and ported to Khan Academy 
// due to similarities between the platforms
// ---------------------------------------------------------------

var ar = [];
var sortRound;

frameRate(10);

var sortArray = function(ar)
{
    var sortPerformed = false;
    
    for(var i = 0; i < ar.length - 1; i++)
    {
        var a = ar[i].n;
        if (a > ar[i+1].n)
        {
            ar[i].n = ar[i+1].n;
            ar[i+1].n = a;
            
            ar[i].color = "red";

            sortPerformed = true;
        }
        else
        {
            ar[i].color = "black";
        }
    }

    return sortPerformed;
};

var generateArray = function(n, x1, x2)
{
    var ar = [];

    for(var i = 0; i < n; i++)
    {
        ar.push( { n : round(random(x1, x2)), color: "black" } );
    }

    return ar;
};

var displayArray = function(ar)
{
    var n = ar.length;
    
    for(var i = 0; i < n; i++)
    {
        var no = ar[i].n;
        
        var x = map(i, 0, n, 0, width);
        
        strokeWeight(4);

        if (ar[i].color === "red")
        {
            stroke(255, 0, 0);
        }
        else
        {
            stroke(0, 0, 0);
        }

        line(x, height - no, x, height);

        var r = floor(i / 15);
        var c = i - r * 15;

        stroke(255, 255, 255);

        if (ar[i].color === "red")
        {
            fill(255, 0, 0);
        }
        else
        {
            fill(0, 0, 0);
        }

        text(no, c * 30, r * 12 + 30);
    }

    stroke(255, 255, 255);
    text("Round: " + sortRound++, 0, 12);
};

var draw = function()
{
    background(255, 255, 255);
    
    if ( !sortArray(ar) )
    {
        ar = generateArray( width / 8, 0, height );
        sortRound = 1;
    }

    displayArray( ar );
};
