for (i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz") // se divisibile per 3 e 5 stampa FIZZBUZZ
    }
    else if (i % 3 == 0) {
        console.log("Fizz") // se divisibile per 3 stampa FIZZ
    }
    else if (i % 5 == 0) {
        console.log("Buzz") // se divisibile per 5 stampa BUZZ
    }
    else {
        console.log(i) // altrimenti procedi con la normale numerazione
    }
}