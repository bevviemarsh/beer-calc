// IBU/EBU calc
const inputHops = document.querySelector('input.amountHops');
const inputAlpha = document.querySelector('input.alphaAcid');
const inputWort = document.querySelector('input.wort');
const buttonIbuCalc = document.querySelector('button.countIbu');
const divIbu = document.querySelector('div.resultIbu');
const buttonResetIbu = document.querySelector('button.resetIbu');

const countIbu = () => {
    let counterOne = 10;
    let counterTwo = 30;
    const inputHopsValue = inputHops.value;
    const inputAlphaValue = inputAlpha.value;
    const inputWortValue = inputWort.value;
    if (inputHopsValue === '' || inputAlphaValue === '' || inputWortValue === '') return;
    if (isNaN(inputHopsValue) || isNaN(inputAlphaValue) || isNaN(inputWortValue)) return;
    if (inputHopsValue > 1000 || inputAlphaValue > 500 || inputWortValue > 100) return;
    const Iburesult = (inputHopsValue * inputAlphaValue * counterTwo) / (inputWortValue * counterOne);
    divIbu.innerHTML = `${Iburesult.toFixed()} <span class="ibuEbu">IBU/EBU</span>`;
    inputHops.value = '';
    inputAlpha.value = '';
    inputWort.value = '';
};

buttonIbuCalc.addEventListener('click', countIbu);

const resetIbu = () => {
    divIbu.innerHTML = '';
};

buttonResetIbu.addEventListener('click', resetIbu);