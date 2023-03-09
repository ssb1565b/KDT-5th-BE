// router.js == 메인 서버 코드

// @ts-check

const express = require('express');

// express 설정 단계
const app = express();

// 포트 세팅 단계
const PORT = 4000;
//  http://localhost:4000 === http://127/0/0/1:4000

const userRouter = require('./routes/users');
// './routes/users.js'인데 .js 생략 가능

// 서버 세팅단계
app.set('view engine', 'ejs');

app.use(express.static('public'));
// 프론트에서 특정 주소요청이 들어오면 public 폴더에서 찾아라
console.log(__dirname); // 현재 파일 위치를 볼 수 있음
// app.use('/css', express.static(__dirname + '/views/css'));
// // = app.use(express.static('views')); 근데 얘보다 __dirname이 좀 더 구체적 (절대경로)
// app.use('/js', express.static('js'));

app.use('/users', userRouter);
// 미들웨어를 끼워놓고자 use를 씀
// 앞으로 앞에 users라는게 붙으면 app이 처리하는게 아니라 userRouter에서 처리하게됨

app.get('/', (req, res) => {
  res.send('Hello, Express world!');
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버실행`);
});
