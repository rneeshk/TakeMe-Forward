/*
    Gor a given array with prices of 5 items -> [250,645,300,900,50]
    All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
*/

let price = [250,645,300,900,50];
let index = 0; //indirect tracking of index
for(let el of price){
    console.log(`Value at index ${index} before offer: ${el}`)
    let discount = el * 10 / 100;
    el = el - discount;
    console.log(`Value after discount:  ${el}`)
    index++;
}
