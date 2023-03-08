// @ts-check

const fs = require('fs');

// 파일을 읽어드리고 그걸 콘솔창에 띄워라
fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);

  console.log('1번', data.toString());
});

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);

  console.log('2번', data.toString());
});

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);

  console.log('3번', data.toString());
});

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);

  console.log('4번', data.toString());
});

// 비동기적 특성으로 인해 순서가 뒤죽박죽으로 실행함
// 이건 callback으로도 해결할수있음
// file_callback.js 파일 참고하기!
