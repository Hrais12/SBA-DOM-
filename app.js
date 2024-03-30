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



// Variable to store the count of flashcards
let flashcardCount = 0;

let generateBtn = document.getElementById('generateBtn');


// Function to create a new flashcard
function createFlashcard(question, answer) {

    let flashCard = document.createElement('div');
    flashCard.setAttribute('class', 'flashCard');

    let flashCardQuestion = document.createElement('div');
    flashCardQuestion.setAttribute('class', 'flashCardQuestion');
    flashCardQuestion.textContent = question;

    let showAnswer = document.createElement('button');
    showAnswer.setAttribute('class', 'showAnswer');
    showAnswer.textContent = 'Show Answer';

    showAnswer.addEventListener('click', function () {
     let flashCardAnswer = flashCard.querySelector('.flashCardAnswer');
        if (!flashCardAnswer) {
            flashCardAnswer = document.createElement('div');
            flashCardAnswer.setAttribute('class', 'flashCardAnswer');
            flashCardAnswer.textContent = answer;
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
        deleteBtn.parentNode.remove();           //Navigate to the parent element and remove the flashcard. same us flashCard.remove();
        flashcardCount--; // Decrement the flashcard count when a flashcard is deleted
        flashcardCountElement.textContent = `Total Flashcards: ${flashcardCount}`; // Update the count displayed on the screen
        
    });

    flashCard.appendChild(flashCardQuestion);
    flashCard.appendChild(showAnswer);
    flashCard.appendChild(deleteBtn);

    return flashCard;
}



generateBtn.addEventListener('click', function () {
    event.preventDefault(); // Prevent form submission

    let questionInput = document.querySelector('#exampleFormControlInput1');
    let answerInput = document.querySelector('#exampleFormControlTextarea1');
    let questionValue = questionInput.value;
    let answerValue = answerInput.value;

    // Check if inputs are valid
    
    if (!questionInput.checkValidity() || !answerInput.checkValidity()) {
        window.alert('Question and Answer must be between 3 and 30 characters long.');
        return;
    }

    // Create a new flashcard
    let flashCard = createFlashcard(questionValue, answerValue);
   

        // Append to the current flashCardsContainer, 3 flashcards per container
    if (flashcardCount % 3 === 0) { // Check if the count is a multiple of 3
        // Create a new flashCardsContainer
        flashCardsContainer = document.createElement('div');
        flashCardsContainer.setAttribute('class', 'flashCardsContainer');
        flashCardsContainer.style.display = 'flex';
        body.appendChild(flashCardsContainer); // Append the new container to the body
    }

    flashCardsContainer.appendChild(flashCard); // Append the flashcard to the current container

    flashcardCount++; // Increment the flashcard count when a flashcard is created
    // Display the total number of flashcards created
    flashcardCountElement.textContent = `Total Flashcards: ${flashcardCount}`;
});

// Display the total number of flashcards created
let flashcardCountElement = document.createElement('p');
flashcardCountElement.textContent = `Total Flashcards: ${flashcardCount}`;
body.appendChild(flashcardCountElement);
