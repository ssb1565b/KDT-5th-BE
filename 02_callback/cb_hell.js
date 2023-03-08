// @ts-check

// 함수 선언부
function funcHell(callback) {
  callback();
}

// 함수 호출부
funcHell(() => {
  console.log('1번인척하는 새로만든 함수');
  funcHell(() => {
    console.log('2번인척하는 새로만든 함수');
    funcHell(() => {
      console.log('3번인척하는 새로만든 함수');
    });
  });
});
// depth가 너무 길어지기 때문에 가독성 저하됨
