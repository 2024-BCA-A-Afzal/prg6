
const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log("Array:", numbers);
console.log("Sum of array:", sum);
