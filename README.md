# Unexpected runtime errors with mixed type arrays in TypeScript under strict type checking

This repository demonstrates a common, yet subtle, error that can occur in TypeScript when dealing with arrays containing mixed data types, particularly when strict null checks and strict type checking are enabled.  The error arises from the interaction between the `any` type and strict type checking. 

## The Problem

The `any` type in TypeScript essentially disables type checking for a variable. While this offers flexibility, it can lead to unexpected runtime errors if not used cautiously.  When combining `any` with strict type checking, seemingly innocuous operations can throw errors.

## Reproducing the Error

1. Clone this repository.
2. Compile the code using `tsc bug.ts`.
3. Run the compiled JavaScript code.

You will notice that the program throws an error when attempting to access elements in an array that contains values with `any` type.

## Solution

The solution is to avoid using the `any` type whenever possible, and instead opt for type-safe alternatives.  If you must use a dynamic array, consider using generics to preserve some type information.  Alternatively, use type guards to carefully check the types of elements in the array before performing any operations that depend on those types.

See `bugSolution.ts` for a possible solution.