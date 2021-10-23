// //let, const

// // const name = 'udit';
// // const age = 20;

// // const hello = `My name is ${name} and age is ${age}`;
// // console.log(hello);


// // const s = 'Hello World';
// // console.log(s.length);
// // console.log(s.toUpperCase());
// // console.log(s.toLowerCase());
// // console.log(s.split(''));


// // const numbers = new Array('1,2,3,4,5');
// // console.log(numbers);

// // const fruits = ['Apples','Oranges','Pears'];
// // fruits[3]= 'grapes';
// // fruits.push('papaya')
// // fruits.unshift('Licchi')
// // fruits.pop('Apples');
// // console.log(fruits.indexOf('Apples'));
// // console.log(fruits);


// // const person = {
// //     firstName: 'Udit',
// //     lastName: 'Bhaskar',
// //     age: 19,
// //     hobbies: ['Cricket', 'Outing','Standups'],
// //     address: {
// //         street: 'pentagon',
// //         sec: 104,
// //         city: 'noida'
// //     }
// // }

// // person.email = 'iam@gmail.com'

// // const { firstName, lastName,email, address:{city}} = person;
// // console.log(firstName, lastName,email,  city)


// const todos = [
//     {
//         id:1,
//         text: 'Brust teeth',
//         isCompleted: true,

//     },
//     {
//         id:2,
//         text: 'College',
//         isCompleted: false,

//     },
//     {
//         id:3,
//         text: 'Coding',
//         isCompleted: true,

//     }
// ]


// //for loops
// // for(let i = 0; i < todos.length; i++){
// //     console.log(todos[i])
// // }

// // for(let todo of todos){
// //     console.log(todo.text);
// // }

// //forEach
// const todotxt = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todotxt);


const addnum = (num1, num2) => {
    return num1 + num2;
};
console.log(addnum(10,2));



