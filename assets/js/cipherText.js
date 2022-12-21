/* Function for cipher and decipher the input text */

function textEncode(action, text = textToCipher.value) {
  const keys = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  if (cipheredText.textContent.length > 0) {
    asideMsg.classList.remove("invisible");
    asideNoMsg.classList.add("invisible");

    for (let key in keys) {
      if (action === "cipher") {
        text = text.replace(new RegExp(key, "g"), keys[key]);
      } else if (action === "decipher") {
        text = text.replace(new RegExp(keys[key], "g"), key);
      }
    }
  }

  return text;
}