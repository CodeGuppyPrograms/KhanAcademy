// Program adapted from the code at
// https://codeguppy.com/code.html?t=primes_display
// ----------------------------------------------------------
// https://codeguppy.com contains programs for kids and teens
// You can adapt the programs to run on Khan Academy
// due to similarities between the platforms
// ----------------------------------------------------------

noStroke();
fill(0);
textAlign(CENTER, CENTER);

var noRows = 15;
var noCols = 5;

// number of primes per page
var noPrimes = noRows * noCols;

var arPrimes = [];
var speed = 1;
var found = 0;

// Returns true if specified number is prime
var isPrime = function(n)
{
    if (n < 2) {
        return false;
    }
    
    var max = sqrt(n);
    
    for(var i = 2; i <= max; i++)
    {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
};


// Returns the next prime number that is 
// greater or equal to n
// console.log( getNextPrime(1000) );
var getNextPrime = function(n)
{
    while(true) // infinite loop
    {
        if ( isPrime(n) ) {
            return n;   // exit only if one prime number is found
        }

        n++;    // it is OK to change n inside function
                // since n is passed by value...
    }
};


// Returns the next m primes greater or equal to n
// in an array
var getNextPrimes = function(n, m)
{
    var ar = [];
    var currNo = n - 1;

    while(ar.length < m)
    {
        currNo = getNextPrime(currNo + 1);
        ar.push(currNo);
    }

    return ar;
};

// Generate new primes
var nextPrimes = function()
{
    for(var i = 0; i < speed; i++)
    {
        var startAt = 2;
        
        if (arPrimes.length > 0) {
            var n = arPrimes[ arPrimes.length - 1 ];
            startAt = n + 1;
        }
            
        arPrimes = getNextPrimes(startAt, noPrimes);
        found += arPrimes.length;
    }
};


var printInformations = function()
{
    pushMatrix();
    
    fill(0, 0, 0);
    text("Primes found: " + found, 100, height - 10);

    popMatrix();
};

// Print numbers from array ar that will fit on the screen (noRows * noCols)
var printNumbers = function(ar)
{
    var rowHeight = (height - 20) / noRows;
    var colWidth = width / noCols;
    
    for(var row = 0; row < noRows; row++)
    {
        for(var col = 0; col < noCols; col++)
        {
            var x = col * colWidth + colWidth / 2;
            var y = row * rowHeight + rowHeight / 2;
            
            var index = row + col * noRows;
            
            text(ar[index], x, y);
        }
    }
};


var draw = function()
{
    background(255, 255, 255);
    
    nextPrimes();
    
    printNumbers(arPrimes);
    printInformations();
};
