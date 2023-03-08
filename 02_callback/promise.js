const promise = new Promise((resolve, reject) => {
  const subin = '26';
  if (subin === '30') {
    setTimeout(() => {
      resolve('수빈은 살아있다');
    }, 1000);
  } else {
    reject('수빈은 죽었다');
  }
});

promise
  .then((data) => {
    // then은 resolve가 나왔을때 실행됨
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
