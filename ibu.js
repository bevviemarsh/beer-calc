const COUNTER_ONE = 10;
const COUNTER_TWO = 30;

// IBU/EBU calc
const formIbu = document.querySelector("form.formIbu");
// const inputHops = document.querySelector("input.hops__input");
// const inputAlpha = document.querySelector("input.acid__input");
// const inputWort = document.querySelector("input.wort__input");
const spanFormIbu = document.querySelector("span.spanFormIbu");
const buttonIbuCalc = document.querySelector("button.countIbu");
const divIbu = document.querySelector("div.resultIbu");
const buttonResetIbu = document.querySelector("button.resetIbu");
const checkboxReset = document.querySelector("input.resetCheck");
const resultOne = document.querySelector("td.resultOne");
const resultTwo = document.querySelector("td.resultTwo");
const resultThree = document.querySelector("td.resultThree");

formIbu.addEventListener("submit", e => {
  e.preventDefault();

  // const inputHopsValue = inputHops.value;
  // const inputAlphaValue = inputAlpha.value;
  // const inputWortValue = inputWort.value;

  const ibuInputs = new FormData(formIbu);
  ibuInputs.append("hops", hops.value);
  ibuInputs.append("acid", acid.value);
  ibuInputs.append("wort", wort.value);
  const hopsIn = ibuInputs.get("hops");
  const acidIn = ibuInputs.get("acid");
  const wortIn = ibuInputs.get("wort");

  // if (
  //   inputHopsValue === "" ||
  //   inputAlphaValue === "" ||
  //   inputWortValue === "" ||
  //   isNaN(inputHopsValue) ||
  //   isNaN(inputAlphaValue) ||
  //   isNaN(inputWortValue) ||
  //   inputHopsValue > 1000 ||
  //   inputAlphaValue > 500 ||
  //   inputWortValue > 100
  // ) {
  //   return (spanFormIbu.innerHTML =
  //     "Hops: number from 0 to 1000. Alpha acid: number from to 500. Amount of wort: number from 0 to 100");
  // }

  if (
    hopsIn === "" ||
    acidIn === "" ||
    wortIn === "" ||
    isNaN(hopsIn) ||
    isNaN(acidIn) ||
    isNaN(wortIn) ||
    hopsIn > 1000 ||
    acidIn > 500 ||
    wortIn > 100
  ) {
    return (spanFormIbu.innerHTML =
      "Hops: number from 0 to 1000. Alpha acid: number from to 500. Amount of wort: number from 0 to 100");
  }

  const Iburesult = (hopsIn * acidIn * COUNTER_TWO) / (wortIn * COUNTER_ONE);

  divIbu.innerHTML = `${Iburesult.toFixed()} <span class="ibuEbu">IBU/EBU</span>`;

  spanFormIbu.innerHTML = "";

  if (!resultOne.innerHTML && !resultTwo.innerHTML && !resultThree.innerHTML) {
    resultOne.innerHTML = `${Iburesult.toFixed()}`;
  } else if (!resultTwo.innerHTML && !resultThree.innerHTML) {
    resultTwo.innerHTML = `${Iburesult.toFixed()}`;
  } else if (!resultThree.innerHTML) {
    resultThree.innerHTML = `${Iburesult.toFixed()}`;
  } else if (
    resultOne.innerHTML &&
    resultTwo.innerHTML &&
    resultThree.innerHTML
  ) {
    resultOne.innerHTML = "";
    resultTwo.innerHTML = "";
    resultThree.innerHTML = "";
    resultOne.innerHTML = `${Iburesult.toFixed()}`;
  }
});

const resetIbu = () => {
  divIbu.innerHTML = "";
  spanFormIbu.innerHTML = "";
  if (checkboxReset.checked === true) {
    formIbu.reset();
    resultOne.innerHTML = "";
    resultTwo.innerHTML = "";
    resultThree.innerHTML = "";
  }
};

buttonResetIbu.addEventListener("click", resetIbu);
