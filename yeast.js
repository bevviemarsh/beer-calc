const COUNTERYEAST = 10;
// yeast calc
const buttonYeast = document.querySelector("button.countYeast");
const inputYeast = document.querySelector("input.inputYeast");
const divYeast = document.querySelector("div.resultYeast");
const buttonResetYeast = document.querySelector("button.resetYeast");

const calcYeast = () => {
  const inputYeastValue = inputYeast.value;

  if (inputYeastValue === "") return;
  if (isNaN(inputYeastValue)) return;
  if (inputYeastValue > 1000) return;

  const resultYeast = inputYeastValue * COUNTERYEAST;
  divYeast.innerHTML = `${resultYeast} <span class="waterYeast">ml</span>`;

  inputYeast.value = "";
};

buttonYeast.addEventListener("click", calcYeast);

const resetYeast = () => {
  divYeast.innerHTML = "";
};

buttonResetYeast.addEventListener("click", resetYeast);
