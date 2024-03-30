// Selecting the form element
let form = document.getElementById('form')
// Selecting the start button
let startBtn = document.getElementById('startBtn')
//


// Adding an event listener to the start button
startBtn.addEventListener('click',function () {
    form.style.display = (form.style.display === 'none')? 'block' : 'none';
})