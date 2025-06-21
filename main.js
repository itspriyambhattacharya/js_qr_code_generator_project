const inputField = document.querySelector("#text");
const btn = document.querySelector(`button[type="button"]`);
const imgTag = document.querySelector("#qr-img");

console.log(imgTag);

console.log(btn);
let inputFieldValue = undefined;

btn.addEventListener("click", (e) => {
  inputFieldValue = inputField.value;
  imgTag.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputFieldValue}`;
});
