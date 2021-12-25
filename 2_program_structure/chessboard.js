const getBoard = (width, height) => {
    let chessBoard = '';
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let nextCharacter = '';
            const startWithHash = ((i + 1) % 2 === 0);  
            if (startWithHash) 
                nextCharacter = ((j + 1) % 2 === 0) ? ' ' : '#';
            else 
                nextCharacter = ((j + 1) % 2 === 0) ? '#' : ' ';
            chessBoard = `${chessBoard}${nextCharacter}`;    
        }
        chessBoard = `${chessBoard}\n`;  
    }
    return chessBoard;
}

const chessBoard = getBoard(8, 8);
console.log(chessBoard);
