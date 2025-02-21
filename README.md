# Type Error in TypeScript Addition
This repo demonstrates a common TypeScript error where type checking fails to catch type errors at compile time when adding a string and a number using the '+' operator.
The `bug.ts` file shows the error scenario.  The `bugSolution.ts` provides a solution using type guards or explicit type assertions.
## Setup
1. Clone the repo.
2. Run `tsc bug.ts` to see the runtime error.
3. Run `tsc bugSolution.ts` to see the fixed code.
## Bug
The bug arises because TypeScript performs type coercion instead of strict type checking in this scenario. This leads to unexpected runtime behavior where the result is NaN.