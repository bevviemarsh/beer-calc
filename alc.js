// alc calc
const inputStart = document.querySelector('input.startBlg');
const inputEnd = document.querySelector('input.endBlg');
const buttonAlc = document.querySelector('button.countAlc');
const buttonResetAlc = document.querySelector('button.resetAlc');
const divAlc = document.querySelector('div.resultAlc');

const calcAlc = () => {
    let counter = 1.938;
    const inputAlcStartValue = inputStart.value;
    const inputAlcEndValue = inputEnd.value;
    if (inputAlcStartValue === '' || inputAlcEndValue === '') return;
    if (isNaN(inputAlcStartValue) || isNaN(inputAlcEndValue)) return;
    if (inputAlcStartValue > 100 || inputAlcEndValue > 100) return;
    const resultAlc = (inputAlcStartValue - inputAlcEndValue) / counter;
    divAlc.innerHTML = `${resultAlc.toFixed(1)} <span class="perCent">%</span>`;
    inputStart.value = '';
    inputEnd.value = '';
};

buttonAlc.addEventListener('click', calcAlc);

const resetAlc = () => {
    divAlc.innerHTML = '';
}


buttonResetAlc.addEventListener('click', resetAlc);