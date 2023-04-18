const fs = require('fs');

console.log("This is First App");

fs.writeFileSync('deepak.txt', 'Hello Deepak is file is created by node File System');


let name = "deepak";
let age = 24;
let userhobby = true;
 

    const useerSumm = (useername,userage,userhobby) => {
        return `hi my name is ${useername} i am ${userage} years old my hobby is ${userhobby}`;
    }

    const add = (a,b) => a + b;
    

    console.log(add(2,5));

    console.log(useerSumm(name,age,userhobby));

    // fs.writeFileSync('play.js', '');
