const inputField = document.querySelector("#text");
const btn = document.querySelector(`button[type="button"]`);
const imgBox = document.querySelector("#img-box");
const imgTag = imgBox.firstChild;
console.log(imgTag);

console.log(btn);
let inputFieldValue = undefined;

btn.addEventListener("click", (e) => {
  inputFieldValue = inputField.value;
  console.log(inputFieldValue);
  generateQR(inputFieldValue);
});

async function generateQR(val) {
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}`;
  const res = await fetch(url);
  const data = res.json();
  console.log(data);
}
