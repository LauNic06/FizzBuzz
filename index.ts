let i: number;
for (i = 195; i <= 195; i++) {
    if (i % 17 == 0) {
        if (i % 11 == 0) {
            process.stdout.write("Bong");
            if (i % 13 == 0) {
                process.stdout.write("Fezz");
            }
        } else {
            if (i % 7 == 0) {
                process.stdout.write("Bang");
            }

            if (i % 5 == 0) {
                process.stdout.write("Buzz");
            }

            if (i % 13 == 0) {
                process.stdout.write("Fezz");
            }

            if (i % 3 == 0) {
                process.stdout.write("Fizz");
            }
        }
        console.log();
    } else if (i % 3 && i % 5 && i % 7 && i % 11 && i % 13) {
        console.log(i);
    } else {
        if (i % 11 == 0) {
            if (i % 13 == 0) {
                process.stdout.write("Fezz");
            }
            process.stdout.write("Bong");
        } else {
            if (i % 3 == 0) {
                process.stdout.write("Fizz");
            }

            if (i % 13 == 0) {
                process.stdout.write("Fezz");
            }

            if (i % 5 == 0) {
                process.stdout.write("Buzz");
            }

            if (i % 7 == 0) {
                process.stdout.write("Bang");
            }
        }
        console.log();
    }

}

