let button = document.getElementById('button');

let checkBox2 = document.getElementById('checkbox2');

let fullName = document.getElementById('full-name');
let email = document.getElementById('email');


function disabledButton(event) {
   
if(checkBox2.checked) {
    console.log('marcou')
}else {
    event.preventDefault();
}

}

function verifyLength (event) {

if(fullName.innerText.length < 10 && email.innerText.length < 10) {
    console.log('dados invalidos');
}else{
    console.log('tudo certo')
}

}

button.addEventListener('click', disabledButton)

button.addEventListener('click', verifyLength)

document.getElementById('calendario').DatePickerX.init(dd, mm, yy);