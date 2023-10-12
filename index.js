let n = process.argv.pop();

// ----------------------------------------
// Approach-1 (will make u --> rejected! [AVOID IT])
               // 4 baar % use ho rha hai(% --> heavy operation(apne andar bhi loop chlata hai, so avoid using it))

function fizzbuzz1(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

// fizzbuzz1(n);


// -------------------------------------------
// Approach-2 (will make u --> partially selected!)
              // 2 baar % use ho rha hai(better than approach-1)

function fizzbuzz2(n) {
    let str;
    for (let i = 1; i <= n; i++) {
        str = "";
        if (i % 3 == 0) {
            str += "Fizz";
        }
        if (i % 5 == 0) {
            str += "Buzz";
        }
        else if(!str){
            str += i;
        }
        console.log(str);
    }
}

// fizzbuzz2(n);


// --------------------------------------------
// Approach-3 (will make u --> selected!😄)...remember it!

function fizzbuzz3(n){
    let cnt3 = 1;
    let cnt5 = 1;
    let str;
    for(let i = 1; i<=n; i++){
        str = "";
        if(cnt3 == 3){
            str += "Fizz";
            cnt3 = 0;
        }
        if(cnt5 == 5){
            str += "Buzz";
            cnt5 = 0;
        }
        else if(!str){
            str += i;
        }
        console.log(str);
        cnt3 ++;
        cnt5 ++;
    }
}

fizzbuzz3(n);





