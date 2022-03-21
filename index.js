// functions
const cl = console.log.bind(console);
// cl('hello world');

function grumpus() {
    cl('I am grumpus');
}

function maggi() {
    let ola = 0;
    for (let i = 1; i <= 5; i++) {
        ola++;
        grumpus();
        if (ola === 2) {
            break;
        }
    }
}
// maggi();

function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    if (roll !== 6) {
        cl(`keep trying ${roll}`);
    } else {
        cl(`Congratulations you rolled a ${roll}`);
    }
}
// rollDice();

function throwDice(numRolls) {
    for (let i = 0; i < numRolls; i++) rollDice();
}
// throwDice(12);

function isValidPassword(password, username) {
    let pass = password.trim().replace(' ', '');
    if (pass.length >= 8) {
        cl('password should not be more than 8 characters');
        return false;
    }
    if (pass.includes(' ') !== -1) {
        cl('Password must not contain space');
        return false;
    }
    if (pass.includes(username)) {
        cl('password must not contain username');
        return false;
    }
    cl("All criteria's met");
    return true;
}

// isValidPassword('adisaola');

// let password = '01234567';
// let pass = password.trim().replace(' ', '');
// let user = 3;
// cl(pass.indexOf(8));
// console.log(pass.length);
// if (pass.length > 8) {
//     cl('noway');
// }

// if (pass.includes(user)) {
//     cl('nononono');
// }