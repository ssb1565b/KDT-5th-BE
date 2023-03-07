// @ts-check
const express = require('express'); // 모듈 불러오는 명령어
const cors = require('cors');
// const { readJsonConfigFile } = require('typescript');

const PORT = 4000;
const app = express();

app.use(cors()); // use() 필요한것들을 넣어주는것
app.use('/', (req, res) => {
  const str = '안녕하세요. 여기는 백엔드 입니다!';
  const json = JSON.stringify(str);
  res.send(json);
});
// /는 주소값 의미

app.listen(PORT, () => {
  console.log(`데이터 통신 서버가 ${PORT}번째에서 실행중입니다.`);
});
