// for solution

const getTriangleRow = (length) => {
    let row = '';
    for (let index = 0; index < length; index++) 
        row = `${row}#`;
    return row;
}

for (let i = 0; i < 7; i++) {
    const rowLength = i + 1;
    const treeRow = getTriangleRow(rowLength);
    console.log(treeRow);
}

// recursive solution 

let triangleRow = '';
do {
    triangleRow = `${triangleRow}#`;
    console.log(triangleRow);
} while (triangleRow.length < 7);