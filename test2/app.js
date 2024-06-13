// Получение элементов счетчиков и текстового поля
const textInput = document.getElementById('text-input');
const remainingCharsCounter = document.getElementById('remaining-chars');
const enteredCharsCounter = document.getElementById('entered-chars');


function updateCharCounters() {
    const maxChars = 50;
    const text = textInput.value;
    const charCount = text.length;
    const remainingChars = maxChars - charCount;


    remainingCharsCounter.textContent = remainingChars;
    enteredCharsCounter.textContent = charCount;


    if (charCount > maxChars) {
        textInput.value = text.slice(0, maxChars);
    }
}


textInput.addEventListener('input', updateCharCounters);


updateCharCounters();
