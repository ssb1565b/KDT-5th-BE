//@ts-check

function buySync(item, price, quantity, callback) {
  // 3.번에 해당되는 매개변수 => callback
  console.log(`${item}상품을 ${quantity}개 골라서 점원에게 주었습니다.`);

  setTimeout(() => {
    console.log('계산이 필요합니다.');
    const total = price * quantity;
    // 콜백적용 : 동기적으로 만들어줌
    callback(total);
  }, 1000);

  // // 2. setTimeout으로 비동기 만들기
  // setTimeout(() => {
  //   console.log('계산이 필요합니다.');
  //   const total = price * quantity;
  //   return total;
  // }, 1000);

  // // 1.
  // console.log('계산이 필요합니다.');
  // const total = price * quantity;
  // return total;
}

function pay(total) {
  console.log(`${total} 원을 지불 하였습니다.`);
}
buySync('포켓몬빵', 1000, 5, pay);

// // 1, 2 번은 매개변수로 전달안하고 여기서 실행
// const totalMoney = buySync('포켓몬빵', 1000, 5);
// pay(totalMoney);
