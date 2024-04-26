// 1. Explique como o método **`map`** funciona em JavaScript e forneça um exemplo de uso.
const array1 = [1, 4, 9, 16];

        const map1 = array1.map((x) => x * 2);

        console.log(map1);

//2. Qual é a diferença entre os métodos **`map`**, **`filter`** e **`reduce`** em JavaScript? Dê um exemplo de uso
//para cada um.  

// map:
const array = [2, 3, 7, 15];

const map = array.map((x) => x * 2);

console.log(map);

//filter:
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);

//reduce:
const array = [1, 2, 3, 4];


const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);



