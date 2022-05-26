const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
caesarCipher = (input, key) => [...input].map(character => {
    const lowerCaseCharacter = character.toLowerCase()
    const index = alphabet.indexOf(lowerCaseCharacter);
    if (index === -1) return character;
    const uncipherChar = alphabet[(index + key) % alphabet.length];
    if (character === lowerCaseCharacter) return uncipherChar;
    return uncipherChar.toUpperCase();
}).join('');