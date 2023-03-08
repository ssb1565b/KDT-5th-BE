// @ts-check

// // 1.
// function func1() {
//   console.log('1번 함수');
// }

// function func2() {
//   console.log('2번 함수');
// }

// function func3() {
//   console.log('3번 함수');
// }

// func1();
// func2();
// func3();

// // 2. 1번보다 더 안정적임
// function func1() {
//   console.log('1번 함수');
//   func2();
// }

// function func2() {
//   console.log('2번 함수');
//   func3();
// }

// function func3() {
//   console.log('3번 함수');
// }

// func1();

// // 3. 함수를 매개변수로 전달
// function func1(callback) {
//   console.log('1번 함수');
//   callback();
// }

// function func2() {
//   console.log('2번 함수');
// }

// function func3() {
//   console.log('3번 함수');
// }

// func1(func2);
// func1(func3);

// // 4. 좀더 복잡한 방법
// function func1(callback) {
//   console.log('1번 함수');
//   callback(func3);
// }

// function func2(callback) {
//   console.log('2번 함수');
//   callback();
// }

// function func3() {
//   console.log('3번 함수');
// }

// func1(func2);

// // 5. 5,4번은 너무 복잡하고 가독성이 떨어짐 한번만 쓸건데 선언할필요도 못느낌 그래서 6번으로!!
// function func1(callback) {
//   console.log('1번 함수');
//   function fakeFunc3() {
//     console.log('3번 인척 하는 함수');
//   }
//   callback(fakeFunc3);
// }
// function func2(callback) {
//   console.log('2번 함수');
//   callback();
// }
// function func3() {
//   console.log('3번 함수');
// }
// func1(func2);

// // 6.
// function func1(callback) {
//   console.log('1번 함수');
//   function fakeFunc3() {
//     console.log('3번 인척 하는 함수');
//   }
//   callback(fakeFunc3);
// }
// function func2(callback) {
//   console.log('2번 함수');
//   callback();
// }
// function func3() {
//   console.log('3번 함수');
// }
// func1(() => {
//   console.log('2번 인척하는 새로 만든 익명 함수');
// });

// 7.
function mutiplication(number, callback) {
  let answer = 0;
  setTimeout(() => {
    answer = number * number;
    callback(answer);
  }, 2000);
}

function say(result) {
  console.log(result);
}

mutiplication(3, say);
