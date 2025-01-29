let marks = [85,97,44,37,76,60];
let sum = 0;
for(const el of marks){
    sum += el;
}
let average = sum / marks.length;
console.log(`Average of marks array is: ${average}`);