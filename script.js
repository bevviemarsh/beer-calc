//nav's gear
const burger = document.querySelector('div.burger');

const navGear = () => {
    burger.classList.toggle('active');
};

burger.addEventListener('click', navGear);

// yeast calc
const buttonYeast = document.querySelector('button.countYeast');
const inputYeast = document.querySelector('input.inputYeast');
const divYeast = document.querySelector('div.resultYeast');
const buttonReset = document.querySelector('button.resetYeast');

const calcYeast = () => {
    let counterYeast = 10;
    const inputYeastValue = inputYeast.value;
    if (inputYeastValue === '') return;
    if (isNaN(inputYeastValue)) return;
    if (inputYeastValue > 1000) return;
    const resultYeast = inputYeastValue * counterYeast;
    divYeast.innerHTML = `${resultYeast} <span class="waterYeast">ml</span>`;
    inputYeast.value = '';

};

const resetYeast = () => {
    divYeast.innerHTML = '';
};

buttonYeast.addEventListener('click', calcYeast);
buttonReset.addEventListener('click', resetYeast);