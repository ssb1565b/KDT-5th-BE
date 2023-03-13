// 1. 한개씩 뺴는법
// export const animals = ['puppy', 'cat'];
// export function showAnimals() {
//   animals.map((el) => console.log(el));
// }

// 2. 한꺼번에 빼는법
const animals = ['puppy', 'cat'];
function showAnimals() {
  animals.map((el) => console.log(el));
}
// 2-1 기본으로 내보내는법
// export { animals, showAnimals };

// 2-2. 줄여서 내보내는법
export { animals as ani, showAnimals as show };
