const textToCipher = document.querySelector("#text-to-cipher");
const cipheredText = document.querySelector("#ciphered-text");
const cipherButton = document.querySelector("#btn-cipher");
const decipherButton = document.querySelector("#btn-decipher");
const copyButton = document.querySelector("#btn-copy");
const asideMsg = document.querySelector("#aside-message");
const asideNoMsg = document.querySelector("#aside-no-message");

/* Automatic height for textarea input */
textToCipher.addEventListener("input", () => {
  textToCipher.style.height = "auto";
  textToCipher.style.height = `${textToCipher.scrollHeight}px`;
});

/* Cipher text */
cipherButton.addEventListener("click", (event) => {
  event.preventDefault();
  cipheredText.textContent = textEncode("cipher");
});

/* Decipher text */
decipherButton.addEventListener("click", (event) => {
  event.preventDefault();
  cipheredText.textContent = textEncode("decipher");
});

/* Copy text */
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(cipheredText.textContent).then(() => {
    copyButton.textContent = "Copied to clipboard";
    copyButton.classList.remove("button__secondary");
    copyButton.classList.add("button__primary");

    setTimeout(() => {
      copyButton.textContent = "Copy";
      copyButton.classList.remove("button__primary");
      copyButton.classList.add("button__secondary");
    }, 2000);
  });
});