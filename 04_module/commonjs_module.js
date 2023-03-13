// 1. 한개씩 받는 방법/한꺼번에 받는 방법 모두 가능 == 구조분해할당
const { animals, showAnimals } = require('./commonjs_animals');
console.log(animals);
showAnimals();

// 2. 한꺼번에 받는 방법
// const animalModule = require('./animals');
// console.log(animalModule);
// console.log(animalModule.animals);
// console.log(animalModule.showAnimals);

// 보내는 방식 자체가 다를뿐이지 받아와서 어떻게 쓰는지는 상관없음
// commonjs 방식 쓰려면 package.json에   "type": "module" 뺴기
