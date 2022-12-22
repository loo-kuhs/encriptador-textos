const MAP_KEYS = new Map([
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
]);

const MAP_KEYS_D = new Map([
  ["enter", "e"],
  ["imes", "i"],
  ["ai", "a"],
  ["ober", "o"],
  ["ufat", "u"],
]);

/* Functions for cipher and decipher the input text */
function cipherText(text) {
  text = normalize(text);
  text = text.replace(/[aeiou]/g, (match) => MAP_KEYS.get(match));

  return text;
}

function decipherText(text) {
  text = normalize(text);
  text = text.replace(
    /enter|imes|ai|ober|ufat/g,
    (match) => MAP_KEYS_D.get(match)
  );

  return text;
}

function textEncode(action, text = textToCipher.value) {
  if (typeof action !== "string") throw new Error("Invalid arguments.");

  if (action === "cipher") {
    return cipherText(text);
  } else if (action === "decipher") {
    return decipherText(text);
  } else {
    throw new Error("Invalid action.");
  }
}