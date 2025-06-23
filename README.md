# QR Code Generator 🔳

A simple and responsive QR Code Generator built using **HTML**, **CSS (Bootstrap)**, and **JavaScript**, that allows users to convert any text or URL into a QR code using an external API.

## 📌 Live Demo

You can access the live version of this project here:  
[https://your-username.github.io/qr-code-generator/](https://your-username.github.io/qr-code-generator/)  
_(Replace with actual GitHub Pages URL if hosted)_

---

## 📂 Project Structure

```
qr-code-generator/
├── index.html       # Main HTML file containing the UI layout
├── main.js          # JavaScript logic for generating QR codes
└── README.md        # Project documentation
```

---

## 🚀 Features

- 🔳 Converts any text or URL into a QR Code.
- 🖼️ Dynamically displays the generated QR code image.
- 📱 Fully responsive design using Bootstrap 5.
- ✅ Validates input before generating QR code.
- 🧑‍💻 Clean and beginner-friendly code structure.

---

## 🖥️ Technologies Used

- **HTML5** – For markup and page structure.
- **Bootstrap 5.3.7** – For responsive layout and styling.
- **JavaScript (ES6)** – For DOM manipulation and API interaction.
- **[GoQR API](https://goqr.me/api/)** – For generating QR codes.

---

## 🛠️ Installation and Usage

### 📥 Clone the Repository

```bash
git clone https://github.com/itspriyambhattacharya/js_qr_code_generator_project.git
cd js_qr_code_generator_project
```

### ▶️ Run the App

Simply open the `index.html` file in any modern web browser:

```bash
start index.html
```

No additional setup or backend is required.

---

## 🧠 How It Works

1. **User inputs** text or URL into the input field.
2. On clicking the **Generate** button:
   - The input is validated to ensure it's not empty.
   - If valid, a GET request is made to the GoQR API to generate a QR code image.
   - The image is then dynamically displayed inside the HTML layout.
3. If the input is empty, a message prompts the user to enter some text.

---

## 📜 Sample Code Explanation

### JavaScript Logic (`main.js`)

```javascript
const inputField = document.querySelector("#text");
const btn = document.querySelector(`button[type="button"]`);
const imgBox = document.querySelector("#img-box");
const imgTag = document.querySelector("#qr-img");

btn.addEventListener("click", (e) => {
  const inputFieldValue = inputField.value;

  if (inputFieldValue.length > 0) {
    imgTag.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputFieldValue}`;
    imgTag.classList.remove("d-none");
  } else {
    imgTag.classList.add("d-none");
    const elem = document.createElement("p");
    elem.innerHTML = "Enter some text and try again";
    elem.id = "failed-msg";
    imgBox.appendChild(elem);
  }

  imgBox.classList.remove("d-none");
});
```

### Explanation

- **DOM Selection**: Selects necessary input fields and image containers.
- **Button Event Listener**: On click, validates input.
- **API Call**: If input is valid, fetches QR image from API.
- **Dynamic Rendering**: Displays image or error message accordingly.

---

## 📎 To-Do (Optional Enhancements)

- Add download button for generated QR codes.
- Add support for custom size/color/error correction.
- Improve error handling and user feedback.
- Add history of generated QR codes using localStorage.

---

## 🧑‍💼 Author

**Priyam Bhattacharya**  
📍 Kolkata, India  
🎓 M.Sc. in Computer Science — University of Calcutta  
🔗 [GitHub Profile](https://github.com/itspriyambhattacharya)  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/itspriyambhattacharya/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
