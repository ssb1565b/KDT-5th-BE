const fs = require('fs').promises;

// 원래 매개변수에 ('test.txt', 'utf-8',()=>{} ) 이렇게 함수가 들어가 있는것
fs.readFile('test.txt', 'utf-8')
  .then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('3번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('4번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .catch((err) => {
    console.log(err);
  });

// file_callback 파일과 비교해보기
// then을 쓴게 수정,가독성 등에 훨씬 용이함
// 그치만 더 간단한건 file_await
