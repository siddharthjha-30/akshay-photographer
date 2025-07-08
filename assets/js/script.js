const scriptURL =
  "https://script.google.com/macros/s/AKfycbz0oqtoXKtDTS77sLuKT0Gm_8QUqMBdbEtKorjRJARbn40ZyZLOqx2C1N4Gi5bXCB_VWw/exec";

const form = document.forms["contact-form"];
const thanksMsg = document.getElementById("thanks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      thanksMsg.innerHTML =
        "<p>Thank you for submitting the form! I'll contact you as soon as possible.<p>";
      setTimeout(() => {
        thanksMsg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
