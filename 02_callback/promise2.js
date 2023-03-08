const lucky = false;

const promise = new Promise((res, rej) => {
  console.log('주식이 오르기를 기다리기 시작한다');
  setTimeout(() => {
    console.log('3년 지나고');
    const profit = 3000;
    if (lucky) {
      res(profit);
    } else {
      rej('망함');
    }
    // lucky ? res(profit) : rej('망함');
  }, 1000);
});

// 1.then,catch 사용
// promise
//   .then((profit) => {
//     console.log(`기다림의 보상으로 ${profit} 원을 벌었습니다!`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async, awiat 사용
async function howMuch() {
  try {
    const result = await promise;
    if (result) {
      console.log(result);
      return;
    }
  } catch (err) {
    console.log(err);
  }
}
howMuch();
