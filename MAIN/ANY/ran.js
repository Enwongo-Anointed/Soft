// document.getElementById('').innerHTML='';
// Add an event listener to a button
// document.getElementById('btn').addEventListener('click', function() {
//     alert('Button clicked!');
//   });
// let newItem = document.createElement('li');
// newItem.innerText = 'jokeeee';
// document.getElementById('Todos').appendChild(newItem);


// console.log(`Hello`);
// console.log(`I like Pizza!`)

// window.alert(`This is an alert!`)
// window.alert(`I like Pizza!`)

document.getElementById("myH1").textContent = `Hello`
document.getElementById("myP").textContent = `I like Pizza!`

// {} contains an object
let person = { 
    name: 'Enwongoabasi',
    age: 16
};
// Dot notation method of changing object content
person.name = 'Gertrude';
// Bracket notation of changing object content
person['name'] = 'Jeremiah';
console.log(person);
console.log(person.age);
console.log(person.name);


// [] contains an array
let selectedColours = ['red','blue'];
selectedColours[4] = 66;
console.log(selectedColours);
console.log(selectedColours[0]);
console.log(selectedColours[1]);
console.log(selectedColours.length); 

// function functionname(variable/parameter) {function itself}
// function used in performing a task
function seeYa(name, lastName) {
    console.log(name + '' + lastName + ` How re you?`);
}
    // argument  
seeYa('Gospel', ' Jeremiah');
seeYa('Nsikak', ' Testimony');

// function used in calculating a value
function square(number) {
    return number * number;
}
console.log(square(2));
console.log(square(22));
// functions either  perform a task or calculate a value
