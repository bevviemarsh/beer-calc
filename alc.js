const COUNTER = 1.938;

// alc calc
const inputStart = document.querySelector("input.startBlg");
const inputEnd = document.querySelector("input.endBlg");
const buttonAlc = document.querySelector("button.countAlc");
const buttonResetAlc = document.querySelector("button.resetAlc");
const divAlc = document.querySelector("div.resultAlc");
const checkboxReset = document.querySelector("input.resetCheck");
const resultOne = document.querySelector("td.resultOne");
const resultTwo = document.querySelector("td.resultTwo");
const resultThree = document.querySelector("td.resultThree");

const calcAlc = () => {
  const inputAlcStartValue = inputStart.value;
  const inputAlcEndValue = inputEnd.value;

  if (inputAlcStartValue === "" || inputAlcEndValue === "") return;
  if (isNaN(inputAlcStartValue) || isNaN(inputAlcEndValue)) return;
  if (inputAlcStartValue > 100 || inputAlcEndValue > 100) return;

  const resultAlc = (inputAlcStartValue - inputAlcEndValue) / COUNTER;

  divAlc.innerHTML = `${resultAlc.toFixed(1)} <span class="perCent">%</span>`;

  if (!resultOne.innerHTML && !resultTwo.innerHTML && !resultThree.innerHTML) {
    resultOne.innerHTML = `${resultAlc.toFixed(1)}`;
  } else if (!resultTwo.innerHTML && !resultThree.innerHTML) {
    resultTwo.innerHTML = `${resultAlc.toFixed(1)}`;
  } else if (!resultThree.innerHTML) {
    resultThree.innerHTML = `${resultAlc.toFixed(1)}`;
  } else if (
    resultOne.innerHTML &&
    resultTwo.innerHTML &&
    resultThree.innerHTML
  ) {
    resultOne.innerHTML = "";
    resultTwo.innerHTML = "";
    resultThree.innerHTML = "";
    resultOne.innerHTML = `${resultAlc.toFixed(1)}`;
  }
};

buttonAlc.addEventListener("click", calcAlc);

$("input.startBlg, input.endBlg").on("keypress", e => {
  if (e.which === 13) {
    e.preventDefault();
    calcAlc();
  }
});

const resetAlc = () => {
  divAlc.innerHTML = "";
  if (checkboxReset.checked === true) {
    inputStart.value = "";
    inputEnd.value = "";
    resultOne.innerHTML = "";
    resultTwo.innerHTML = "";
    resultThree.innerHTML = "";
  }
};

buttonResetAlc.addEventListener("click", resetAlc);
