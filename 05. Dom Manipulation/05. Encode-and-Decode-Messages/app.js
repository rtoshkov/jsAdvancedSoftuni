function encodeAndDecodeMessages() {
    const [encodeButton, decodeButton] = Array.from(document.querySelectorAll('#main button'));
    const [encodedTextArea, decodeTextArea] = document.querySelectorAll('#main textarea');
    encodeButton.addEventListener('click', encodeOn);
    decodeButton.addEventListener('click', decodeOn);

    function encodeOn(e) {
        let message = Array.from(encodedTextArea.value);
        let encoded = '';
        message.forEach((letter) => {
            encoded += String.fromCharCode(letter.charCodeAt(0) + 1);

        })
        decodeTextArea.value = encoded;
        encodedTextArea.value = '';
    }

    function decodeOn(e) {
        let encryptedMessage = Array.from(decodeTextArea.value);
        let decoded = '';
        encryptedMessage.forEach((letter) => {
            decoded += String.fromCharCode(letter.charCodeAt(0) - 1)
        })
        decodeTextArea.value = decoded;
    }
}