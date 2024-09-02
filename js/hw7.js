let numbers = [2, 5, 8]; 
numbers[1] = 10; 
console.log(numbers); 






const friends = ["Mango" , "Kiwi" , "Poly"]
friends[3] = "Egor";
console.log(friends[3]);
console.log(friends);







const res = [3 , 4 , 1 , 8 , 2];
let sum = 0;
let i = 0;
// let n = 0;
// let result = 0;
// while (n < res.length) {
//     result = result + res[n]
//     n += 1
// }
// console.log(result)

for (let i = 0; i < res.length; i += 1) {
sum = sum + res[i];
}
console.log(sum)




const nums = [1 , 2 , 3 , 4 , 5];
for (const num of nums) {
    console.log(num)
}





const sentences = ["My", "name", "is", "Egor", "Goloshchapov"]
for (const sentence of sentences) {
if (sentence.length > 5)
    console.log(sentence)
}




let numbers3 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,10];
let maxNumber = numbers3[1];
for (let i = 1; i < numbers3.length; i++) {
    if (numbers3[i] > maxNumber) {
        maxNumber = numbers3[i];
    }
}
console.log(maxNumber);





const number = [ 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18];
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0)
    console.log(number[i])
}