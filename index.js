// in line comments

console.log("Hello world");

var myName = "Artiom";

myName = 8;

let ourName = "freeCodeCamp";

const pi = 3.14;

var a = 11;

a += 7;

console.log(a);

var myArry = ["cat", 1, "dog"];

myArry.pop();

console.log(myArry);

myArry.push("dog");

console.log(myArry);

myArry.shift();

console.log(myArry);

myArry.unshift("cat");

console.log(myArry);

function Hello(name) {
  console.log("Hello World " + name);
}

Hello("Artiom");
Hello("Tal");

myArry = [1, 2, 3];

console.log("Hello " + JSON.stringify(myArry));
console.log("Hello " + myArry);

if (3 === "3") {
  console.log("True");
} else {
  console.log("False");
}

if (3 == "3") {
  console.log("True");
} else {
  console.log("False");
}

var myObject = {
  age: 12,
  string: "hello",
};

console.log(myObject);

myObject.hat = "blue";

console.log(myObject);

delete myObject["hat"];

console.log(myObject);

var collection = {
  1254: {
    album: "some album",
    artist: "good artist",
    tracks: ["song 1", "song 2"],
  },
  7554: {
    album: "another album",
    artist: "bad artist",
    tracks: ["song 1", "song 2", "song 3"],
  },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

console.log(collection);
console.log(JSON.stringify(collection));

function random() {
  return Math.random(); //0-1 cant be 1 or 0
}

console.log(random());

console.log(Math.floor(random() * 20)); // 0-19

parseInt("11"); // from str to int

1 == "1" ? console.log("True") : console.log("False");
1 === "1" ? console.log("True") : console.log("False");

// var magic = function () {
//   return new Date();
// };

const magic = () => new Date();

// var myConcat = function (arr1, arr2) {
//   return arr1.concat(arr2);
// };

const myConcat = (arr1, arr2) => arr1.concat(arr2);

const realNumberArray = [4, 5.6, -9.6, 3.14, 42, 6, -2];

const squareList = (arr) => {
  const squaredItegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredItegers;
};

const squaredInteger = squareList(realNumberArray);
console.log(squaredInteger);

const increment = (num, value = 1) => num + value;

console.log(increment(4, 2));
console.log(increment(7)); // 7+1

const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum(2, 5, 8));

const arr1 = [1, 2, 3, 4, 5, 6];

arr2 = arr1; // same
arr3 = [...arr1]; // copy

arr1[0] = "hello";
console.log(arr2);
console.log(arr3);

var voxel = { x: 2.6, y: 7.4, z: 6.54 };

const { x: ab, y: bb, z: cb } = voxel;

console.log(ab, bb, cb);

const Local_Forecast = {
  tomorrow: {
    min: 73.3,
    max: 84.6,
  },
};

const {
  tomorrow: { max: maxTomorrow },
} = Local_Forecast;

console.log(maxTomorrow);

let aa = 8,
  ba = 6;
(() => {
  [aa, ba] = [ba, aa];
})();
console.log(aa);
console.log(ba);

const createPerson = (name, age, gender) => ({ name, age, gender });

console.log(createPerson("artiom", "23", "male"));

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

var zeus = new SpaceShuttle("Jupiter");

console.log(zeus.targetPlanet);

class Thermostat {
  constructor(temp) {
    this._temp = (5 / 9) * (temp - 32);
  }
  get temper() {
    return this._temp;
  }
  set temper(update) {
    this._temp = update * 2;
  }
}

const thermos = new Thermostat(76);
console.log(thermos);
let temp = thermos.Temp;
thermos.temper = 26;
temp = thermos.Temp;
console.log(thermos.temper);
