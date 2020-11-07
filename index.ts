const myName = 'dngwoo';
const age = 24;
const gender = 'male';

const sayHi = (myName, age, gender) => {
  console.log(`Hello ${myName}, you are ${age}, you are a ${gender}`);
};

sayHi(myName, age); // 이 부분 때문에 에러가 난다.
