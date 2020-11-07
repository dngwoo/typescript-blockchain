//

// 클래스를 사용하는 이유는 인터페이스를 dist/index.js에 넣고 싶을 때 사용한다.
class Human {
  name: string;
  private age: number;
  gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const person = {
  name: 'dngwoo',
  gender: 'male',
  age: 22,
};

const sayHi = (person: Human): void => {
  console.log(
    `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`
  );
};

sayHi(person); // age에서 에러가 뜨게 된다. 클래스에서 private을 쓰면 dist/index.js에서는 존재하지 않는다.
