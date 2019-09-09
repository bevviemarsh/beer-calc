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

// calculations

if (forms.dataset.type === "yeast") {
  forms.addEventListener("submit", e => {
    e.preventDefault();

    const inputYeast = document.querySelector("input.yeastInputGroup__input");
    const spanFormYeast = document.querySelector("span.spanFormYeast");
    const divYeast = document.querySelector("div.resultYeast");
    const buttonResetYeast = document.querySelector("button.resetYeast");
    const checkboxReset = document.querySelector("input.resetCheck");
    const resultOne = document.querySelector("td.resultOne");
    const resultTwo = document.querySelector("td.resultTwo");
    const resultThree = document.querySelector("td.resultThree");

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

    if (
      !resultOne.innerHTML &&
      !resultTwo.innerHTML &&
      !resultThree.innerHTML
    ) {
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

    const resetYeast = () => {
      divYeast.innerHTML = "";
      spanFormYeast.innerHTML = "";
      if (checkboxReset.checked === true) {
        inputYeast.value = "";
        resultOne.innerHTML = "";
        resultTwo.innerHTML = "";
        resultThree.innerHTML = "";
      }
    };

    buttonResetYeast.addEventListener("click", resetYeast);
  });
} else if (forms.dataset.type === "alcohol") {
  forms.addEventListener("submit", e => {
    e.preventDefault();

    const buttonResetAlc = document.querySelector("button.resetAlc");
    const spanFormAlc = document.querySelector("span.spanFormAlc");
    const divAlc = document.querySelector("div.resultAlc");
    const checkboxReset = document.querySelector("input.resetCheck");
    const resultOne = document.querySelector("td.resultOne");
    const resultTwo = document.querySelector("td.resultTwo");
    const resultThree = document.querySelector("td.resultThree");

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

    // const resultAlc = (startIn - endIn) / COUNTER;

    divAlc.innerHTML = `${resultAlc.toFixed(1)} <span class="perCent">%</span>`;

    spanFormAlc.innerHTML = "";

    if (
      !resultOne.innerHTML &&
      !resultTwo.innerHTML &&
      !resultThree.innerHTML
    ) {
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

    const resetAlc = () => {
      divAlc.innerHTML = "";
      spanFormAlc.innerHTML = "";
      if (checkboxReset.checked === true) {
        forms.reset();
        resultOne.innerHTML = "";
        resultTwo.innerHTML = "";
        resultThree.innerHTML = "";
      }
    };

    buttonResetAlc.addEventListener("click", resetAlc);
  });
} else if (forms.dataset.type === "ibu") {
  forms.addEventListener("submit", e => {
    e.preventDefault();

    const buttonResetIbu = document.querySelector("button.resetIbu");
    const checkboxReset = document.querySelector("input.resetCheck");
    const resultOne = document.querySelector("td.resultOne");
    const resultTwo = document.querySelector("td.resultTwo");
    const resultThree = document.querySelector("td.resultThree");
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

    // const Iburesult = (hopsIn * acidIn * COUNTER_TWO) / (wortIn * COUNTER_ONE);

    divIbu.innerHTML = `${Iburesult.toFixed()} <span class="ibuEbu">IBU/EBU</span>`;

    spanFormIbu.innerHTML = "";

    if (
      !resultOne.innerHTML &&
      !resultTwo.innerHTML &&
      !resultThree.innerHTML
    ) {
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

    const resetIbu = () => {
      divIbu.innerHTML = "";
      spanFormIbu.innerHTML = "";
      if (checkboxReset.checked === true) {
        forms.reset();
        resultOne.innerHTML = "";
        resultTwo.innerHTML = "";
        resultThree.innerHTML = "";
      }
    };

    buttonResetIbu.addEventListener("click", resetIbu);
  });
}
