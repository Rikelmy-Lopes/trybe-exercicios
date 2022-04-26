// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function disabledAcction(event) {
event.preventDefault();

}


HREF_LINK.addEventListener('click', disabledAcction)


INPUT_CHECKBOX.addEventListener('click', disabledAcction)



function onlyA(event) {
    event.preventDefault(event.key('a'));

}

INPUT_TEXT.addEventListener('keypress', onlyA);