

// var -> function scope (try to not use)
// let -> block scope (can change variable values)
// cons -> block scope (cannot change variable values)



function sayHello(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log("Var says " + i); // will display even out of for loop scope but as long as inside function scope
}

function letSayHello(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    //console.log("let says " + i); // gives error
}

sayHello();
letSayHello();

// const is have scope restriction as let but unlike let one cannot change values of const
const x = 5;
// x = 10; // error