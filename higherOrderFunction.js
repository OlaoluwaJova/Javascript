let cl = console.log.bind(console);

// cl('jova');

function ola() {
    cl('Olaoluwa is the name of a King');
}

function vale() {
    cl('Vale is the name of a King');
}

function repeatNTimes(f, num) {
    for (let i = 0; i < num; i++) {
        cl(num - 1);
        cl(i);
        f();
    }
}
// repeatNTimes(ola, 4);
// this recieves two numbers
function isItBetween(a, b) {
    // this selects individual numbers and checks them against the conditions.
    return function(num) {
        // this returns a Boolean value
        return num >= a && num <= b;
    };
}
// const isChild = isItBetween(0, 18);

// const isNineties = isItBetween(1990, 1999);

// const isNiceWeather = isItBetween(60, 79);