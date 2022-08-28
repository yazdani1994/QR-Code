const generateBtn = document.querySelector("form button");
const qrCodeBox = document.querySelector(".qr-code");
const qrInput = document.querySelector("form input");
const qrImage = document.querySelector(".qr-code img");
const myQrCode = document.querySelector(".my-qrcode");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;

  if (!qrValue) {
    return alert("لطفا یک متن یا آدرس اینترنتی وارد کنید");
  }

  generateBtn.innerHTML = "درحال ساختن QR Code";
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImage.addEventListener("load", () => {
    qrCodeBox.classList.remove("hidden");
    generateBtn.innerHTML = "تولید QR Code";
    myQrCode.innerHTML = qrInput.value;
    qrInput.value = "";
  });
});

// qrInput.addEventListener("keyup", () => {
//   if (!qrInput.value) {
//     qrCodeBox.classList.add("hidden");
//   }
// });