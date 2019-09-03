// const COUNTERYEAST = 10;

// const formYeast = document.querySelector("form.formYeast");

// formYeast.addEventListener("submit", e => {
//   e.preventDefault();

//   const inputYeast = document.querySelector("input.yeastInputGroup__input");
//   const spanFormYeast = document.querySelector("span.spanFormYeast");
//   const divYeast = document.querySelector("div.resultYeast");
//   const buttonResetYeast = document.querySelector("button.resetYeast");
//   const checkboxReset = document.querySelector("input.resetCheck");
//   const resultOne = document.querySelector("td.resultOne");
//   const resultTwo = document.querySelector("td.resultTwo");
//   const resultThree = document.querySelector("td.resultThree");

//   const inputYeastValue = inputYeast.value;

//   if (
//     inputYeastValue === "" ||
//     isNaN(inputYeastValue) ||
//     inputYeastValue > 1000
//   ) {
//     return (spanFormYeast.innerHTML = `Number from 0 to 1000`);
//   }

//   const resultYeast = inputYeastValue * COUNTERYEAST;
//   divYeast.innerHTML = `${resultYeast} <span class="waterYeast">ml</span>`;

//   spanFormYeast.innerHTML = "";

//   if (!resultOne.innerHTML && !resultTwo.innerHTML && !resultThree.innerHTML) {
//     resultOne.innerHTML = `${resultYeast}`;
//   } else if (!resultTwo.innerHTML && !resultThree.innerHTML) {
//     resultTwo.innerHTML = `${resultYeast}`;
//   } else if (!resultThree.innerHTML) {
//     resultThree.innerHTML = `${resultYeast}`;
//   } else if (
//     resultOne.innerHTML &&
//     resultTwo.innerHTML &&
//     resultThree.innerHTML
//   ) {
//     resultOne.innerHTML = "";
//     resultTwo.innerHTML = "";
//     resultThree.innerHTML = "";
//     resultOne.innerHTML = `${resultYeast}`;
//   }

//   const resetYeast = () => {
//     divYeast.innerHTML = "";
//     spanFormYeast.innerHTML = "";
//     if (checkboxReset.checked === true) {
//       inputYeast.value = "";
//       resultOne.innerHTML = "";
//       resultTwo.innerHTML = "";
//       resultThree.innerHTML = "";
//     }
//   };

//   buttonResetYeast.addEventListener("click", resetYeast);

// });
