const inputField = document.querySelector("#text");
const btn = document.querySelector(`button[type="button"]`);

console.log(btn);
let inputFieldValue = undefined;

btn.addEventListener("click", (e) => {
  inputFieldValue = inputField.value;
  console.log(inputFieldValue);
});
