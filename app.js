// Selecting the form element
let form = document.getElementById('form')
// Selecting the start button
let startBtn = document.getElementById('startBtn')
//


// Adding an event listener to the start button
startBtn.addEventListener('click',function () {
    form.style.display = (form.style.display === 'none')? 'block' : 'none';
})


// Selecting the body element
let body = document.querySelector('body');

// Creating flashCardsContainer outside the event listener
let flashCardsContainer = document.createElement('div');
flashCardsContainer.setAttribute('class', 'flashCardsContainer');
flashCardsContainer.style.display = 'flex';
// Appending the container to the body
body.appendChild(flashCardsContainer);

let generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', function () {
    event.preventDefault(); // Prevent form submission

    let questionInput = document.querySelector('#exampleFormControlInput1');
    let answerInput = document.querySelector('#exampleFormControlTextarea1');
    let questionValue = questionInput.value;
    let answerValue = answerInput.value;

    let flashCard = document.createElement('div');
    flashCard.setAttribute('class', 'flashCard');

    let flashCardQuestion = document.createElement('div');
    flashCardQuestion.setAttribute('class', 'flashCardQuestion');
    flashCardQuestion.textContent = questionValue;


    let showAnswer = document.createElement('button');
    showAnswer.setAttribute('class', 'showAnswer');
    showAnswer.textContent = 'Show Answer';

    showAnswer.addEventListener('click', function () {
     let flashCardAnswer = flashCard.querySelector('.flashCardAnswer');
        if (!flashCardAnswer) {
            flashCardAnswer = document.createElement('div');
            flashCardAnswer.setAttribute('class', 'flashCardAnswer');
            flashCardAnswer.textContent = answerValue;
            flashCard.appendChild(flashCardAnswer);
            showAnswer.textContent = 'Hide Answer';
        } else {
            flashCardAnswer.remove();
            showAnswer.textContent = 'Show Answer';
        }
    });


    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'deleteBtn');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function () {
        flashCard.remove();
    });
    
    flashCard.appendChild(flashCardQuestion);
    flashCard.appendChild(showAnswer);
    flashCard.appendChild(deleteBtn);

    flashCardsContainer.appendChild(flashCard); // Appending to the same container
});