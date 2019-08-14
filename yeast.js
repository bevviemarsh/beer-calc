const COUNTERYEAST = 10;
// yeast calc
const buttonYeast = document.querySelector("button.countYeast");
const inputYeast = document.querySelector("input.inputYeast");
const divYeast = document.querySelector("div.resultYeast");
const buttonResetYeast = document.querySelector("button.resetYeast");
const checkboxReset = document.querySelector("input.resetCheck");
const resultOne = document.querySelector("td.resultOne");
const resultTwo = document.querySelector("td.resultTwo");
const resultThree = document.querySelector("td.resultThree");

const calcYeast = () => {
  const inputYeastValue = inputYeast.value;

  if (inputYeastValue === "") return;
  if (isNaN(inputYeastValue)) return;
  if (inputYeastValue > 1000) return;

  const resultYeast = inputYeastValue * COUNTERYEAST;
  divYeast.innerHTML = `${resultYeast} <span class="waterYeast">ml</span>`;

  if (!resultOne.innerHTML && !resultTwo.innerHTML && !resultThree.innerHTML) {
    resultOne.innerHTML = `${resultYeast}`;
  } else if (!resultTwo.innerHTML && !resultThree.innerHTML) {
    resultTwo.innerHTML = `${resultYeast}`;
  } else if (!resultThree.innerHTML) {
    resultThree.innerHTML = `${resultYeast}`;
  } else if (
    resultOne.innerHTML &&
    resultTwo.innerHTML &&
    resultThree.innerHTML
  ) {
    resultOne.innerHTML = "";
    resultTwo.innerHTML = "";
    resultThree.innerHTML = "";
    resultOne.innerHTML = `${resultYeast}`;
  }
};

buttonYeast.addEventListener("click", calcYeast);

$("input.inputYeast").on("keypress", e => {
  if (e.which === 13) {
    e.preventDefault();
    calcYeast();
  }
});

const resetYeast = () => {
  divYeast.innerHTML = "";
  if (checkboxReset.checked === true) {
    inputYeast.value = "";
    resultOne.innerHTML = "";
    resultTwo.innerHTML = "";
    resultThree.innerHTML = "";
  }
};

buttonResetYeast.addEventListener("click", resetYeast);
