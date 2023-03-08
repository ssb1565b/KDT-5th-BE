const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('test1.txt', 'utf-8');
  console.log('1번', data.toString());
  data = await fs.readFile('test2.txt', 'utf-8');
  console.log('2번', data.toString());
  data = await fs.readFile('test3.txt', 'utf-8');
  console.log('3번', data.toString());
  data = await fs.readFile('test4.txt', 'utf-8');
  console.log('4번', data.toString());
}
main();
// await가 없으면 pendding 즉 계속 기다리고 있는 상태가 됨
