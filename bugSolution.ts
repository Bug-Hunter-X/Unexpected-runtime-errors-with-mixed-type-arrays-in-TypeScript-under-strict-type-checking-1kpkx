function printArray(arr: (number | string | boolean | null | undefined | object)[]): void {
  for (let i = 0; i < arr.length; i++) {
    //Checking type before processing
    if (typeof arr[i] === 'number') {
        console.log(`number: ${arr[i]}`);
    } else if (typeof arr[i] === 'string') {
        console.log(`string: ${arr[i]}`);
    } else if (typeof arr[i] === 'boolean') {
        console.log(`boolean: ${arr[i]}`);
    } else if (arr[i] === null) {
        console.log(`null`);
    } else if (arr[i] === undefined) {
        console.log(`undefined`);
    } else {
        console.log(`object: ${JSON.stringify(arr[i])}`);
    }
  }
}

let myArray: number[] = [1, 2, 3, 4, 5];
printArray(myArray);

let myStringArray: string[] = ['a', 'b', 'c', 'd', 'e'];
printArray(myStringArray);

let myMixedArray: (number | string)[] = [1, 'a', 2, 'b', 3];
printArray(myMixedArray);

let myAnyArray: (number | string | boolean | null | undefined | object)[] = [1, 'a', true, null, undefined, {}];
printArray(myAnyArray);