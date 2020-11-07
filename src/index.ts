const myName = 'dngwoo';
const age = 24;
const gender = 'male';

const sayHi = (myName: string, age: number, gender: string): void => {
  // 여기에 ?을 써주면 옵셔널 파라미터가 된다.
  console.log(`Hello ${myName}, you are ${age}, you are a ${gender}!`);
};

sayHi(myName, age, gender); // 이제 이 부분은 에러가 나지 않는다.
