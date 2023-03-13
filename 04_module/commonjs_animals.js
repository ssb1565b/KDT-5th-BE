const animals = ['puppy', 'cat'];

// 1. 한개씩 뺴는 방법
exports.animals = animals;
exports.showAnimals = function showAnimals() {
  animals.map((el) => console.log(el));
};

// 2. 한꺼번에 빼는 방법
// module.exports = {
//   animals,
//   showAnimals,
// };

// 1,2 번 모두 방식만 다를뿐 의미는 같음
