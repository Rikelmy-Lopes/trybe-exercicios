function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // atv 1

  // * Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  
   const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

   let paiTagLi = document.getElementById('days');

   for(let i = 0; i < dezDaysList.length; i += 1) {
    let createLi =  document.createElement('li')
    createLi.className = 'day';
    createLi.innerText = dezDaysList[i];   
    createLi = paiTagLi.appendChild(createLi);
}

// * Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

const dia25 = document.getElementsByClassName('day')[25];
const dia26 = document.getElementsByClassName('day')[26];
const dia32 = document.getElementsByClassName('day')[32];

dia25.className = 'holiday';
dia26.className = 'holiday';
dia32.className = 'holiday';





// * Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dia5 = document.getElementsByClassName('day')[5];
const dia12 = document.getElementsByClassName('day')[12];
const dia19 = document.getElementsByClassName('day')[19];
const diaRepetido = document.getElementsByClassName('day')[26 - 1];

dia5.className = 'friday';
dia12.className = 'friday';
dia19.className = 'friday';
diaRepetido.className = 'friday';


// atv 2


    let buttonHoliday = document.createElement('button');
    buttonHoliday.textContent = 'Feriados';
    buttonHoliday.id = 'btn-holiday';
    let tagPai = document.getElementsByClassName('buttons-container')[0];
    buttonHoliday = tagPai.appendChild(buttonHoliday);

    // atv 3
    buttonHoliday.addEventListener('click', changeColor);


    function changeColor(buttonHoliday) {
   document.getElementsByClassName('holiday')[0].style.backgroundColor = 'yellow';

   document.getElementsByClassName('holiday')[1].style.backgroundColor = 'yellow';

   document.getElementsByClassName('holiday')[2].style.backgroundColor = 'yellow';

    }

    //atv 4

    let buttonFriday = document.createElement('button');
    buttonFriday.textContent = 'Sexta-feira';
    buttonFriday.id = 'btn-friday';
    let tagPai2 = document.getElementsByClassName('buttons-container')[0];
    buttonFriday = tagPai2.appendChild(buttonFriday);

    //atv 5

    buttonFriday.addEventListener('click', changeNumber);


    function changeNumber(buttonFriday) {
   document.getElementsByClassName('friday')[0].innerText = 'Sexta Feira';

   document.getElementsByClassName('friday')[1].innerText = 'Sexta Feira';

   document.getElementsByClassName('friday')[2].innerText = 'Sexta Feira';

   document.getElementsByClassName('friday')[3].innerText = 'Sexta Feira';

   resiz

    }

    // atv 6 


    function increaseSize(event) {
        event.target.style.fontSize = '40px';
    }

    let increase = document.getElementById('days');
    increase.addEventListener('mouseover', increaseSize);


    function decreaseSize(event) {
        event.target.style.fontSize = '22px';
    }

    let decrease = document.getElementById('days');
    decrease.addEventListener('mouseout', decreaseSize);

    // atv 7
 let input = document.getElementById('task-input');
    let tagSpan = document.createElement('span');
    let tagDivPai = document.getElementsByClassName('my-tasks')[0];
    tagSpan = tagDivPai.appendChild(tagSpan);