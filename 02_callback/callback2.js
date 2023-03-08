// @ts-check

function buySync(item, price, quantity, callback) {
  // 3.번에 해당되는 매개변수 => callback
  console.log(`${item}상품을 ${quantity}개 골라서 점원에게 주었습니다.`);

  setTimeout(() => {
    console.log('계산이 필요합니다.');
    const total = price * quantity;
    // 콜백적용 : 동기적으로 만들어줌
    callback(total);
  }, 1000);
}

buySync('포켓몬빵', 1000, 5, (total) => {
  console.log(`${total} 원을 지불 하였습니다.`);
});
// 이 방식은 addEventListener 와 비슷한 모양 즉 addEventListener의 두번째 매개변수가 익명함수로 전달되어서 콜백함수로서 실행되는것
