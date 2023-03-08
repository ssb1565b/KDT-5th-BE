// @ts-check

const fs = require('fs');

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);
  console.log('1번', data.toString());

  fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log('2번', data.toString());

    fs.readFile('test.txt', 'utf-8', (err, data) => {
      if (err) console.log(err);
      console.log('3번', data.toString());

      fs.readFile('test.txt', 'utf-8', (err, data) => {
        if (err) console.log(err);
        console.log('4번', data.toString());
      });
    });
  });
});

// 그러나 이건 가독성이 많이 떨어짐
// file_promise 파일 보기
