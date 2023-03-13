// 1. 기본
// import { animals, showAnimals } from './es6_animals.js';
// console.log(animals);
// showAnimals();

// 2. 함수명 바꿀때 1번과 결과는 동일
// 2-1.
// import { animals as ani, showAnimals as show } from './es6_animals.js';
// 2-2. 줄인걸 받을떄
import { ani, show } from './es6_animals.js';
console.log(ani);
show();

//// es6 방식 쓰려면 package.json에   "type": "module"  추가하기
