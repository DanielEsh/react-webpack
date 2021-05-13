/* eslint-disable */

const concat = (first: string, last: string): string => {
  return first + last;
};

console.log(concat('Hello ', 'World')); // -> Hello World;

interface myHomeTaskProps {
  howIDoIt: string;
  someArray: (number | string)[];
  withData: Object[];
}

const myHomeTask: myHomeTaskProps = {
  howIDoIt: 'I Do It Wel',
  someArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', someArray: ['string one', 23] }],
};

interface MyArray<T> {
  [N: number]: T;

  reduce(callback: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
}

const arr: MyArray<number> = [1, 2, 3, 4, 5];

const sum = arr.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});

console.log(sum); // -> 15
