// 68 task starts

// function getTruthyFalsyCount(arr) {
//   const truthy  = arr.filter((item) => item);
//   const falsy = arr.filter((item) => !item);

//   return (`truthy qiymatlari ${truthy} falsy qiymatlari ${falsy}`);
// }
// console.log(getTruthyFalsyCount([false, 1, 10, 0.1, "sultonqul", 1.13, 0]))
// 68 task ends

// 69 task starts

// let arr = [1,2,3,4,5]

// arr.__proto__.findSumArray = function () {
//     let result = this.reduce((a, b) => a + b, 0);
//     return result
// }

// console.log(arr.findSumArray());

// 69 task ends 

// 70 task starts

// let str = "Azizbek'".toLowerCase()
// str.__proto__.findVowels = function () {
//     let vowels = ["a", "e", "i", "o", "u", "o'"];
//     let  count = 0;
//    for (let item of this) {
//     if (vowels.includes(item)){
//         count++
//     }
//    }
//    return count
// }

// console.log(str.findVowels());
// 70 task ends


// 71 task starts

// let str = "Azizbek"

// str.__proto__.getLength = function () {
//     return this.length
// }
// console.log(str.length);
// 71 task ends

// 72 task starts
// const exist = function(board, word) {
//     const dfs = function(i, j, k) {
//         if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return false;
        
//         if (k === word.length) return true;
        
//         const char = word[k];
//         if (board[i][j] !== char) return false;
//         const temp = board[i][j];
//         board[i][j] = "*";
//         const found = dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);
//         board[i][j] = temp;
//         return found;
//     };
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             if (dfs(i, j, 0)) return true;
//         }
//     }
//     return false;
// };
// const board = [
//     ["A","B","C","E"],
//     ["S","F","C","S"],
//     ["A","D","E","E"]
// ];
// const word1 = "ABCCED";
// const word2 = "YEE";
// console.log(exist(board, word1)); 
// console.log(exist(board, word2)); 

// 73 task starts


// function removeElements(head, val) {
//     let result = [];

//     for (let i = 0; i < head.length; i++) {
//         if (head[i] !== val) {
//             result.push(head[i]);
//         }
//     }

//     return result;
// }

// console.log(removeElements([1,2,6,3,4,5,6], 1)); 
// 73 task ends




// 74 task starts

// let arr = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];

// let newArr = [...arr]

// for (let i = 0; i < newArr.length; i++) {
//     arr[i] = []
//     for (let g = 0; g < newArr[i].length; g++) {
//         arr[i].unshift(newArr[g][i])

//     }

// }

// console.log(arr);
// 74 task ends


// 75 task starts

// function areArraysEqual(a,b) {
//   if (a.length !== b.length) {
//     return false;
//   }

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) return false 
//   }
//   return true
// }

// console.log(areArraysEqual([1,2,3], [1,2,3])); 
// console.log(areArraysEqual([1,5,2], [1,5,2])); 
// console.log(areArraysEqual([1,2,1], [1,1,2])); 

// 75 task ends






// qoshimcha task boshlandi najot talim is the best so'zini alohida arrayda yigindisi korsatadi

// let str = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest".toLowerCase();

// let arr = ["najot" , "ta'lim" , "is" , "the" , "best"] ;

// let newArr = arr.filter((item) => str.includes(item));
// console.log(newArr);

// 2 method

// let str = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest".toLowerCase();

// let arr = ["najot" , "ta'lim" , "is" , "the" , "best"] ;
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     if (str.includes(arr[i])) {
//         result.push(arr[i])
//     }
// }
// console.log(result);

// qo'shimcha task ikki va undan ortiq qatnashgan sonlarni alohida arrayga kochiradi 

// let arr = [1,2,3,4,2,1,1,2,3]

// let result = arr.filter(item => arr.indexOf (item) !== arr.lastIndexOf(item));

// console.log(result);





