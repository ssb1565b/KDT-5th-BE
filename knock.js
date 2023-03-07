function knockDoor(count, name, callback) {
  console.log('노크를 하고 기다립니다! ');
  setTimeout(() => {
    callName(count, name);
  }, 1000 * count);
}

function callName(count, name) {
  console.log(`${name}이가 ${count}초만에 문을열고 나왔다`);
}

knockDoor(3, '영식', callName);
