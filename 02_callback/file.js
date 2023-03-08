// @ts-check

// 1. 파일 읽기
const fs = require('fs');
// fs는 설치하지 않아도 바로 쓸수있음 express는 설치했기때문에 쓸수있었던것

// 함수 호출부
fs.readFile('test.txt', 'utf-8', (err, data) => {
  // 만약 test.txt 말고 test1.txt 같이 없는 파일을 부르면 에러가 뜸
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
// test.txt 읽어라. 읽는 방식은 utf-8 방식으로 읽어라 ( utf-8 : 초성 중성 동성으로 저장되는것으로 표준으로 많이 씀) utf-8안하면 한글 깨짐

// 함수선언은 아래와 같이 이미 따로 되어있음
// fs.readFile(callback){
//   callback(err,data)
// }

// 2. 파일 쓰기
const str = '파일 쓰기 테스트';

fs.writeFile('test1.txt', str, 'utf-8', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('파일 쓰기 완료!');
  }
});
// 인자값의 의미는 어떤파일?, 어떤 데이터 쓸건지, 포맷방식, 에러발생했을때
