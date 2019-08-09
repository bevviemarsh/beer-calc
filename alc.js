const COUNTER = 1.938;

// alc calc
const inputStart = document.querySelector("input.startBlg");
const inputEnd = document.querySelector("input.endBlg");
const buttonAlc = document.querySelector("button.countAlc");
const buttonResetAlc = document.querySelector("button.resetAlc");
const divAlc = document.querySelector("div.resultAlc");
const checkboxReset = document.querySelector("input.resetCheck");

const calcAlc = () => {
  const inputAlcStartValue = inputStart.value;
  const inputAlcEndValue = inputEnd.value;

  if (inputAlcStartValue === "" || inputAlcEndValue === "") return;
  if (isNaN(inputAlcStartValue) || isNaN(inputAlcEndValue)) return;
  if (inputAlcStartValue > 100 || inputAlcEndValue > 100) return;

  const resultAlc = (inputAlcStartValue - inputAlcEndValue) / COUNTER;

  divAlc.innerHTML = `${resultAlc.toFixed(1)} <span class="perCent">%</span>`;
};

buttonAlc.addEventListener("click", calcAlc);

const resetAlc = () => {
  divAlc.innerHTML = "";
  if (checkboxReset.checked === true) {
    inputStart.value = "";
    inputEnd.value = "";
  }
};

buttonResetAlc.addEventListener("click", resetAlc);
