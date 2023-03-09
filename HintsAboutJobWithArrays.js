//Як швидко очистити масив
const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
fruits.length = 0;
console.log(fruits); // поверне []
//Як об'єднати більше двох масивів
const fruits = ['apple', 'banana', 'orange'];
const meat = ['poultry', 'beef', 'fish'];
const vegetables = ['potato', 'tomato', 'cucumber'];
const food = [...fruits, ...meat, ...vegetables];
console.log(food); // поверне ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]
//Як отримати рандомне значення масиву
const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit); // поверне рандомний фрукт із масиву
