const COUNTER = 1.938;

// alc calc
const formAlc = document.querySelector("form.formAlc");
// const inputStart = document.querySelector("input.alcBLGStart__input");
// const inputEnd = document.querySelector("input.alcBLGEnd__input");
const buttonAlc = document.querySelector("button.countAlc");
const buttonResetAlc = document.querySelector("button.resetAlc");
const spanFormAlc = document.querySelector("span.spanFormAlc");
const divAlc = document.querySelector("div.resultAlc");
const checkboxReset = document.querySelector("input.resetCheck");
const resultOne = document.querySelector("td.resultOne");
const resultTwo = document.querySelector("td.resultTwo");
const resultThree = document.querySelector("td.resultThree");

formAlc.addEventListener("submit", e => {
  e.preventDefault();

  const alcInputs = new FormData(formAlc);
  alcInputs.append("start", start.value);
  alcInputs.append("end", end.value);
  const startIn = alcInputs.get("start");
  const endIn = alcInputs.get("end");

  // const inputAlcStartValue = inputStart.value;
  // const inputAlcEndValue = inputEnd.value;

  // if (
  //   inputAlcStartValue === "" ||
  //   inputAlcEndValue === "" ||
  //   isNaN(inputAlcStartValue) ||
  //   isNaN(inputAlcEndValue) ||
  //   inputAlcStartValue > 100 ||
  //   inputAlcEndValue > 100
  // ) {
  //   return (spanFormAlc.innerHTML = `Number from 0 to 100`);
  // }

  if (
    startIn === "" ||
    endIn === "" ||
    isNaN(startIn) ||
    isNaN(endIn) ||
    startIn > 100 ||
    endIn > 100
  ) {
    return (spanFormAlc.innerHTML = `Number from 0 to 100`);
  }

  // const resultAlc = (inputAlcStartValue - inputAlcEndValue) / COUNTER;
  const resultAlc = (startIn - endIn) / COUNTER;

  divAlc.innerHTML = `${resultAlc.toFixed(1)} <span class="perCent">%</span>`;

  spanFormAlc.innerHTML = "";

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
});

const resetAlc = () => {
  divAlc.innerHTML = "";
  spanFormAlc.innerHTML = "";
  if (checkboxReset.checked === true) {
    formAlc.reset();
    resultOne.innerHTML = "";
    resultTwo.innerHTML = "";
    resultThree.innerHTML = "";
  }
};

buttonResetAlc.addEventListener("click", resetAlc);
