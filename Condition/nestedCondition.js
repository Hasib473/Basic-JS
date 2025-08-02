//  colo ekhon akta problem dekhi nested if else kivabe likhtey hoy

let marks=77;

if(marks >=33 ){
    console.log("Pass ")

    if (marks>=80){
        console.log("A+");

    }

    else if( marks >=70){
        console.log("A");
    }

    else if(marks >=60){
        console.log("A-")
    }

    else {
        console.log("B")
    }
}

else{
    console.log("you are Fail")
}




// once more problem use ternary operation in 

let temp =45;
 
let result = temp >30 ? "Today is a hot day ." +
(temp >40 ? "please turn on the ac" : "Pleae on the Fan")
: "Its a cold day";

console.log(result);

