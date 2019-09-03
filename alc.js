// const COUNTER = 1.938;

// const formAlc = document.querySelector("form.formAlc");

// formAlc.addEventListener("submit", e => {
//   e.preventDefault();

//   const buttonResetAlc = document.querySelector("button.resetAlc");
//   const spanFormAlc = document.querySelector("span.spanFormAlc");
//   const divAlc = document.querySelector("div.resultAlc");
//   const checkboxReset = document.querySelector("input.resetCheck");
//   const resultOne = document.querySelector("td.resultOne");
//   const resultTwo = document.querySelector("td.resultTwo");
//   const resultThree = document.querySelector("td.resultThree");

//   const alcInputs = new FormData(formAlc);
//   alcInputs.append("start", start.value);
//   alcInputs.append("end", end.value);
//   const startIn = alcInputs.get("start");
//   const endIn = alcInputs.get("end");

//   if (
//     startIn === "" ||
//     endIn === "" ||
//     isNaN(startIn) ||
//     isNaN(endIn) ||
//     startIn > 100 ||
//     endIn > 100
//   ) {
//     return (spanFormAlc.innerHTML = `Number from 0 to 100`);
//   }

//   const resultAlc = (startIn - endIn) / COUNTER;

//   divAlc.innerHTML = `${resultAlc.toFixed(1)} <span class="perCent">%</span>`;

//   spanFormAlc.innerHTML = "";

//   if (!resultOne.innerHTML && !resultTwo.innerHTML && !resultThree.innerHTML) {
//     resultOne.innerHTML = `${resultAlc.toFixed(1)}`;
//   } else if (!resultTwo.innerHTML && !resultThree.innerHTML) {
//     resultTwo.innerHTML = `${resultAlc.toFixed(1)}`;
//   } else if (!resultThree.innerHTML) {
//     resultThree.innerHTML = `${resultAlc.toFixed(1)}`;
//   } else if (
//     resultOne.innerHTML &&
//     resultTwo.innerHTML &&
//     resultThree.innerHTML
//   ) {
//     resultOne.innerHTML = "";
//     resultTwo.innerHTML = "";
//     resultThree.innerHTML = "";
//     resultOne.innerHTML = `${resultAlc.toFixed(1)}`;
//   }

//   const resetAlc = () => {
//     divAlc.innerHTML = "";
//     spanFormAlc.innerHTML = "";
//     if (checkboxReset.checked === true) {
//       formAlc.reset();
//       resultOne.innerHTML = "";
//       resultTwo.innerHTML = "";
//       resultThree.innerHTML = "";
//     }
//   };

//   buttonResetAlc.addEventListener("click", resetAlc);
// });
