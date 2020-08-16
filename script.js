/* let greeting = 'Hello World';
let a = 3;
let b = 5;
function add(number1, number2){
  let sum = number1 + number2;
  return sum;
}
let sum = add(a,b);
alert(a + b + sum);
alert(greeting);
if (age < 18){
  alert("You're an adult");
} else {
  alert("You're not an adult");
}

let personDetails = {
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    },
    alertMessage: function(message) {
        alert(message);
    }
}

personDetails.alertMessage('Hello World');
*/


function emailValidate(email) {
    if(email.includes('@')) {
        return true;
    }
    else {
        return false;
    }
}

function clickListener(event){
  event.preventDefault();
  let emailInput = document.querySelector('#email');
  let messageInput = document.querySelector('#message');
  let emailText = emailInput.value;
  let messageText = messageInput.value;
  if(emailValidate(emailText) !== true) {
    console.log('The email address must contain @');
    return false;
  }
  console.log('email: ', emailText, ' message: ', messageText);
}

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', clickListener);
