const wordSearch = (letters, word) => { 
    // stores the results of horizontal and vertical checks as t/f
    let verticalWord;
    let horizontalWord;
    // Check if we actually have some inputs: 
    if (letters.length === 0 || !word) {
    return false;
    };
    //  --- HORIZONTAL CHECK FUNCTION ---:
    // joins each element of letters into a string
    const horizontalJoin = letters.map(ls => ls.join(''))
    // // iterate thorugh elements of joined string
    for (l of horizontalJoin) {
    //     // if string includes specified word
        if (l.includes(word)) {
    //         // console.log(l);
            horizontalWord = true}
    }
    // --- VERTICAL CHECK FUNCTION ---:
    // make an empty array to hold sub-arrays
    let verticalResults = [];
    // iterate through each row 
    for (let col = 0; col < letters[0].length; col++) {
        // make an empty sub-array to hold returned column values
        let verticalArray = [];
        // pushes those results to our holder array
        verticalResults.push(verticalArray);
        // iterate through columns by row
            for (let row = 0; row < letters.length; row++) {
                // push element as indicated
                verticalArray.push(letters[row][col]);
            }        
    }
    // makes an array out of our vertical results
    const verticalJoin = verticalResults.map(ls => ls.join(''))
    // iterate through strings of verticalJoin array's elements
    for (l of verticalJoin) {
        // if that element includes the provided word
        if (l.includes(word)) {
            verticalWord = true;
        }
    }
    // returns true if either of the horizontal or vertical checks succeeds
    if (horizontalWord || verticalWord === true) {
        return true;
    }   
   // if all else fails, FALSE! 
   else return false;
};

module.exports = wordSearch