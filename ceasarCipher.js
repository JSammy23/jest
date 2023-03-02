function ceasarCipher(str, shift) {
  // Set up an empty string to hold the encrypted message
  let result = '';

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Get the ASCII code for the current character
    let charCode = str.charCodeAt(i);

    // Check if the character is a letter
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letter
      result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letter
      result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      // Not a letter, so just append it to the result
      result += str.charAt(i);
    }
  }

  // Return the encrypted message
  return result;
}

module.exports = ceasarCipher;