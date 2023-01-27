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

/**
 * It takes a string, normalizes it, then replaces all vowels with their corresponding ciphertext.
 * @param {string} text - The text to be encrypted.
 * @return {string} The text that has been normalized and replaced with the MAP_KEYS.
 */
function cipherText(text) {
  text = normalize(text);
  text = text.replace(/[aeiou]/g, (match) => MAP_KEYS.get(match));

  return text;
}

/**
 * It takes a string, normalizes it, and then replaces all the words in the string that are in the
 * MAP_KEYS_D map with the corresponding value.
 * @param {string} text - The text to be deciphered.
 * @returns {string} The text is being returned.
 */
function decipherText(text) {
  text = normalize(text);
  text = text.replace(/enter|imes|ai|ober|ufat/g, (match) =>
    MAP_KEYS_D.get(match)
  );

  return text;
}

/**
 * "If the action is cipher, then cipher the text, otherwise if the action is decipher, then decipher
 * the text, otherwise throw an error."
 *
 * The function takes two arguments: action and text. The action argument is a string that can be
 * either "cipher" or "decipher". The text argument is a string that is the text to be ciphered or
 * deciphered
 * @param {string} action - The action to perform. Can be either "cipher" or "decipher".
 * @param {string} text - The text to be encoded.
 * @returns {string} the result of the function cipherText or decipherText.
 */
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