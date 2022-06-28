import * as readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findNumberInArgs(i: number, argsInt: number[]): number {
    for (let index = 0; index < argsInt.length; index++) {
        if (i == argsInt[index]) {
            return 1;
        }
    }

    return 0;
}

function printMessageForMultipleOf3() {
    process.stdout.write("Fizz");
}

function printMessageForMultipleOf5() {
    process.stdout.write("Buzz");
}

function printMessageForMultipleOf7() {
    process.stdout.write("Bang");
}

function printMessageForMultipleOf13() {
    process.stdout.write("Fezz");
}

function printMessageForMultipleOf11(i: number, argsInt: number[]) {
    if (i % 17 == 0 && findNumberInArgs(17, argsInt)) {
        process.stdout.write("Bong");
    }

    if (i % 13 == 0  && findNumberInArgs(13, argsInt)) {
        printMessageForMultipleOf13();
    }

    if (i % 17) {
        process.stdout.write("Bong");
    }
}

function printMessageForMultipleOf17(i: number, argsInt: number[]) {
    if (i % 11 == 0  && findNumberInArgs(11, argsInt)) {
        printMessageForMultipleOf11(i, argsInt);
    } else {
       printMessageReverseOrder(i, argsInt);
    }
}

function printMessageReverseOrder(i: number, argsInt: number[]) {
    if (i % 7 == 0 && findNumberInArgs(7, argsInt)) {
        printMessageForMultipleOf7();
    }

    if (i % 5 == 0 && findNumberInArgs(5, argsInt)) {
        printMessageForMultipleOf5();
    }

    if (i % 13 == 0 && findNumberInArgs(13, argsInt)) {
        printMessageForMultipleOf13();
    }

    if (i % 3 == 0 && findNumberInArgs(3, argsInt)) {
        printMessageForMultipleOf3();
    }
}

function printMessageInOrder(i: number, argsInt: number[]) {
    if (i % 3 == 0 && findNumberInArgs(3, argsInt)) {
        printMessageForMultipleOf3();
    }

    if (i % 13 == 0 && findNumberInArgs(13, argsInt)) {
        printMessageForMultipleOf13();
    }

    if (i % 5 == 0 && findNumberInArgs(5, argsInt)) {
        printMessageForMultipleOf5();
    }

    if (i % 7 == 0 && findNumberInArgs(7, argsInt)) {
        printMessageForMultipleOf7();
    }
}


rl.question('Write a number: ', (answer) => {
    let i = parseInt(answer);

    let args = process.argv.slice(2);
    let index = 0;
    let argsInt: number[] = new Array(6);

    args.forEach(function (arg) {
        argsInt[index] = parseInt(arg);
        index++;
    });

    if (i % 17 == 0 && findNumberInArgs(17, argsInt)) {
        printMessageForMultipleOf17(i, argsInt);
    } else if (i % 3 && i % 5 && i % 7 && i % 11 && i % 13) {
        console.log(i);
    } else if (i % 11 == 0 && findNumberInArgs(11, argsInt)) {
        printMessageForMultipleOf11(i, argsInt);
    } else {
        printMessageInOrder(i, argsInt);
    }

    rl.close();
});
