const inputField = document.querySelector("#text");
const btn = document.querySelector(`button[type="button"]`);
const imgBox = document.querySelector("#img-box");
const imgTag = document.querySelector("#qr-img");

console.log(btn);
let inputFieldValue = undefined;

btn.addEventListener("click", (e) => {
  inputFieldValue = inputField.value;
  if (inputFieldValue.length > 0) {
    imgTag.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputFieldValue}`;
    const fm = document.querySelector("#failed-msg");
    fm.classList.add("d-none");
    imgTag.classList.remove("d-none");
  } else {
    console.log("entering else");

    imgTag.classList.add("d-none");
    const elem = document.createElement("p");
    elem.innerHTML = "Enter some text and try again";
    elem.id = "failed-msg";
    imgBox.appendChild(elem);
  }
  imgBox.classList.remove("d-none");
});
