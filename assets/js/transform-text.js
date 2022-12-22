// Transform input text to lowercase and quit accents, but accept ñ character 
function normalize(str) {
  str = str.replace(/á/g, "a");
  str = str.replace(/é/g, "e");
  str = str.replace(/í/g, "i");
  str = str.replace(/ó/g, "o");
  str = str.replace(/ú/g, "u");

  str = str.toLowerCase();

  return str;
}