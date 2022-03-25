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