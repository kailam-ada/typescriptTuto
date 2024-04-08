let str: string = "abc";
let x: number = 3;
let any: any = 3;
any = "hello";
let y: unknown;
function rand(num1: number, num2: number): void {

}
let val: null = null;
let anotherVal: undefined = undefined;
let arr: number[] = [];
let obj: [string, number] = ["hello", 2]
let obj1: object = {};

// Custom types

type Animal = {
    name: string;
    age: number;
    colors: string[];
    //optional
    legs?: number;
}

// types files eg: types.ts are usually created to store the different types used

const dog1: Animal = {
    name: "tim",
    age: 10,
    colors: ["brown", "black"],
};

const dog2: Animal = {
    name: "tom",
    age: 11,
    colors: ["white", "black"],
} as Animal

const printAnimal = (animal: Animal) => {
    console.log(animal.name, animal.age);
}

printAnimal(dog1)

// nested types
type Farm = {
    animals: Animal[]
    animalNamesToObjects: {
        [name: string]: Animal
    }
}

type Monkey = {
    diet: string;
} & Animal;

// I get an error because I did not specify the Animal properties
const cheetah: Monkey = {
    diet: "banana",
}

const s = new Set<number>()

// Interfaces
interface Animal {
    name: string;
}

// enum

enum ShirtSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large"
}    

const getShirtPrice = (shirtSize: ShirtSize) => {
    switch (shirtSize) {
        case ShirtSize.Small:
            return 10;
        case ShirtSize.Medium:
            return 20;
        case ShirtSize.Large:
            return 30;
    }
}

//
type Fish = {
    name: string;
    swim: () => void;
}

type Dog = {
    name: string;
    bark: () => void;
}

const isFish = (animal: Fish | Dog): animal is Fish => {
    return (animal as Fish).swim !== undefined
}

const callAnimalFunc = (animal: Fish | Dog) => {
    if (isFish(animal)) animal.swim()
    else animal.bark()
}

let ignoredVariable : number = 2;

//@ts-ignore
ignoredVariable = "hello"