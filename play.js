const person = {
    name : 'deepak',
    age : 29,
    greet(){
        console.log(`Hi i am ${this.name}`)
    }
}

person.greet();

const hobby = ['Sports', 'coocking'];

// console.log(hobby.map(hobby => 'Hobby ' + hobby))

hobby.push('Programing');

console.log(hobby);

const copyarrays = [...hobby];

console.log(copyarrays);

const toArray = (...args)=>{
return args;
}

console.log(1,2,3,4,5,5);