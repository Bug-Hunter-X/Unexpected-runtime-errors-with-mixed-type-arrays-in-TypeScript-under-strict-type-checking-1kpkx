function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let myArray: number[] = [1, 2, 3, 4, 5];
printArray(myArray); //This works fine

let myStringArray: string[] = ['a','b','c','d','e'];
printArray(myStringArray); //This works fine

let myMixedArray: (number | string)[] = [1, 'a', 2, 'b', 3];
printArray(myMixedArray); //This also works fine

let myAnyArray: any[] = [1, 'a', true, null, undefined, {}];
printArray(myAnyArray); // This will throw error if you use strict null checks and strict type checking