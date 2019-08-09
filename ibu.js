const COUNTER_ONE = 10;
const COUNTER_TWO = 30;

// IBU/EBU calc
const inputHops = document.querySelector("input.amountHops");
const inputAlpha = document.querySelector("input.alphaAcid");
const inputWort = document.querySelector("input.wort");
const buttonIbuCalc = document.querySelector("button.countIbu");
const divIbu = document.querySelector("div.resultIbu");
const buttonResetIbu = document.querySelector("button.resetIbu");
const checkboxReset = document.querySelector("input.resetCheck");

const countIbu = () => {
  const inputHopsValue = inputHops.value;
  const inputAlphaValue = inputAlpha.value;
  const inputWortValue = inputWort.value;

  if (inputHopsValue === "" || inputAlphaValue === "" || inputWortValue === "")
    return;
  if (isNaN(inputHopsValue) || isNaN(inputAlphaValue) || isNaN(inputWortValue))
    return;
  if (inputHopsValue > 1000 || inputAlphaValue > 500 || inputWortValue > 100)
    return;

  const Iburesult =
    (inputHopsValue * inputAlphaValue * COUNTER_TWO) /
    (inputWortValue * COUNTER_ONE);

  divIbu.innerHTML = `${Iburesult.toFixed()} <span class="ibuEbu">IBU/EBU</span>`;
};

buttonIbuCalc.addEventListener("click", countIbu);

const resetIbu = () => {
  divIbu.innerHTML = "";
  if (checkboxReset.checked === true) {
    inputHops.value = "";
    inputAlpha.value = "";
    inputWort.value = "";
  }
};

buttonResetIbu.addEventListener("click", resetIbu);
