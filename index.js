// Es 1 ------------------------------------------------------------------------------------------------------------------------------------

// let even;

// for(let i = 0; i<=10; i++){
//     even = i;
//     if(even%2===0){
//         console.log(even);
//     }
//     else{}
// }

// Es 2 ------------------------------------------------------------------------------------------------------------------------------------

// let array = [];
// const MAXMULTIPLIDI= 10;

// for(let i = 1; i<=MAXMULTIPLIDI; i++){
//     array.push([]);
//     for(let j = 1; j<=MAXMULTIPLIDI; j++){
//         array[i-1].push(i*j);
//     };
// };

// console.table(array);

// Es 3 ------------------------------------------------------------------------------------------------------------------------------------

// const kmMilesConverter = function(){
    
//     const oneMiles = 1.609;
    
//     const kmInput = prompt("Inserire KM da convertire in Mils");
//     const milsOutput = (kmInput / oneMiles);
//     console.log(milsOutput + " Mils");
// }();

// Es 4 ------------------------------------------------------------------------------------------------------------------------------------

// const array = []
// let arySum = 0;

// for(let i = 0; i<10; i++){
//     array.push(parseInt(Math.random() * 100));
// };

// array.forEach(element => {
//     arySum += element;
// });

// console.log(array);
// console.log(arySum);

// Es 5 ------------------------------------------------------------------------------------------------------------------------------------

// const array = [];

// for(let i = 0; i<5; i++){
//     array.push(parseInt(Math.random() * 100));
// };

// const aryCopy = [...array];
// const reverseAry = aryCopy.reverse();
// console.log(array);
// console.log(reverseAry);

// Es 6 ------------------------------------------------------------------------------------------------------------------------------------

// const array = [];

// for(let i = 0; i<5; i++){
//     array.push(parseInt(Math.random() * 100));
// };

// console.log(array);
// array.sort((a,b) => a-b);
// console.log(array);

// Es 7 ------------------------------------------------------------------------------------------------------------------------------------

// const array = [5, -3, 2, 5, -9, 0, 1, -1, -8, 7];

// console.log(array);

// const aryFilter = array.filter(n => n >= 0);

// console.log(aryFilter);

// Es 8 ------------------------------------------------------------------------------------------------------------------------------------

// const string = "Hello world !";

// const remWhiteSpace = string.replaceAll(" ", "");

// console.log(remWhiteSpace);

// Es 9 ------------------------------------------------------------------------------------------------------------------------------------

function isBool(n){
    n = String(n);
    const lastchar = n.substr(n.length-1, 1);
    return  lastchar === "0";
};

if(isBool(1000) === true){
    console.log(true);
}
else{
    console.log(false);
}

// Es 10 ------------------------------------------------------------------------------------------------------------------------------------

// let array = [ 0, 2, -6, 8, -1, -9, 7, 3, -5, 1];
