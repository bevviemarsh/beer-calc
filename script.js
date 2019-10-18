// nav's gear
const burger = document.querySelector("div.burger");

const navGear = () => {
  burger.classList.toggle("active");
};

burger.addEventListener("click", navGear);

// global consts
const COUNTERYEAST = 10;
const COUNTER = 1.938;
const COUNTER_ONE = 10;
const COUNTER_TWO = 30;

// forms
const forms = document.getElementById("beerForm");

// Results repository
function resultsRepository(result, cleanup) {
  const resultOne = document.querySelector("td.resultOne");
  const resultTwo = document.querySelector("td.resultTwo");
  const resultThree = document.querySelector("td.resultThree");
  const checkboxReset = document.querySelector("input.resetCheck");

  if (!resultOne.innerHTML && !resultTwo.innerHTML && !resultThree.innerHTML) {
    resultOne.innerHTML = `${result}`;
  } else if (!resultTwo.innerHTML && !resultThree.innerHTML) {
    resultTwo.innerHTML = `${result}`;
  } else if (!resultThree.innerHTML) {
    resultThree.innerHTML = `${result}`;
  } else if (
    resultOne.innerHTML &&
    resultTwo.innerHTML &&
    resultThree.innerHTML
  ) {
    resultOne.innerHTML = "";
    resultTwo.innerHTML = "";
    resultThree.innerHTML = "";
    resultOne.innerHTML = `${result}`;
  }

  return () => {
    cleanup();
    if (checkboxReset.checked === true) {
      forms.reset();
      resultOne.innerHTML = "";
      resultTwo.innerHTML = "";
      resultThree.innerHTML = "";
      checkboxReset.checked = false;
    }
  };
}

// calculations

function yeastPageController() {
  const inputYeast = document.querySelector("input.yeastInputGroup__input");
  const spanFormYeast = document.querySelector("span.spanFormYeast");
  const divYeast = document.querySelector("div.resultYeast");
  const buttonResetYeast = document.querySelector("button.resetYeast");

  const inputYeastValue = inputYeast.value;

  if (
    inputYeastValue === "" ||
    isNaN(inputYeastValue) ||
    inputYeastValue > 1000
  ) {
    return (spanFormYeast.innerHTML = `Number from 0 to 1000`);
  }

  function calcYeast(inputYeastValue, COUNTERYEAST) {
    return inputYeastValue * COUNTERYEAST;
  }

  const resultYeast = calcYeast(inputYeastValue, COUNTERYEAST);
  // const resultYeast = inputYeastValue * COUNTERYEAST;
  divYeast.innerHTML = `${resultYeast} <span class="waterYeast">ml</span>`;

  spanFormYeast.innerHTML = "";

  const resetCallback = resultsRepository(resultYeast, () => {
    divYeast.innerHTML = "";
    spanFormYeast.innerHTML = "";
  });

  buttonResetYeast.addEventListener("click", resetCallback);
}

function alcoholPageController() {
  const buttonResetAlc = document.querySelector("button.resetAlc");
  const spanFormAlc = document.querySelector("span.spanFormAlc");
  const divAlc = document.querySelector("div.resultAlc");

  const alcInputs = new FormData(forms);
  alcInputs.append("start", start.value);
  alcInputs.append("end", end.value);
  const startIn = alcInputs.get("start");
  const endIn = alcInputs.get("end");

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

  function calcAlc(startIn, endIn, COUNTER) {
    return (startIn - endIn) / COUNTER;
  }

  const resultAlc = calcAlc(startIn, endIn, COUNTER);

  divAlc.innerHTML = `${resultAlc.toFixed(1)} <span class="perCent">%</span>`;

  spanFormAlc.innerHTML = "";

  const resetCallback = resultsRepository(resultAlc.toFixed(1), () => {
    divAlc.innerHTML = "";
    spanFormAlc.innerHTML = "";
  });

  buttonResetAlc.addEventListener("click", resetCallback);
}

function ibuPageController() {
  const buttonResetIbu = document.querySelector("button.resetIbu");
  const spanFormIbu = document.querySelector("span.spanFormIbu");
  const divIbu = document.querySelector("div.resultIbu");

  const ibuInputs = new FormData(forms);

  ibuInputs.append("hops", hops.value);
  ibuInputs.append("acid", acid.value);
  ibuInputs.append("wort", wort.value);
  const hopsIn = ibuInputs.get("hops");
  const acidIn = ibuInputs.get("acid");
  const wortIn = ibuInputs.get("wort");

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

  function calcIbu(hopsIn, acidIn, wortIn, COUNTER_ONE, COUNTER_TWO) {
    return (hopsIn * acidIn * COUNTER_TWO) / (wortIn * COUNTER_ONE);
  }

  const Iburesult = calcIbu(hopsIn, acidIn, wortIn, COUNTER_ONE, COUNTER_TWO);

  divIbu.innerHTML = `${Iburesult.toFixed()} <span class="ibuEbu">IBU/EBU</span>`;

  spanFormIbu.innerHTML = "";

  const resetCallback = resultsRepository(Iburesult.toFixed(), () => {
    divIbu.innerHTML = "";
    spanFormIbu.innerHTML = "";
  });

  buttonResetIbu.addEventListener("click", resetCallback);
}

forms.addEventListener("submit", e => {
  e.preventDefault();
  if (forms.dataset.type === "yeast") {
    yeastPageController();
  } else if (forms.dataset.type === "alcohol") {
    alcoholPageController();
  } else if (forms.dataset.type === "ibu") {
    ibuPageController();
  }
});
