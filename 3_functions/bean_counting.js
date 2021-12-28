const countBs = () => {
    const totalA = countChar('Angel Arsenio', 'A');
    console.log(totalA);
}

const countChar = (word, character) => {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === character)
            counter++;
    }
    return counter;
}

countBs();
