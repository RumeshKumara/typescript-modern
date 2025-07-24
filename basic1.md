Sure, TypeScript is a statically typed superset of JavaScript that enhances the language with types. Here's an overview of TypeScript theory with examples:

### 1. Basic Types

Typescript introduces several basic types similar to JavaScript:

```typescript
let isDone: boolean = false;
let count: number = 10;
let name: string = "Rumesh";
```

### 2. Arrays and Tuples

Arrays can be typed using `Array<type>` or `type[]`, while tuples allow for fixed-length arrays with specific types:

```typescript
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
```

### 3. Functions

Functions can specify types for parameters and return values:

```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

### 4. Interfaces

Interfaces define the structure of objects:

```typescript
interface Person {
    name: string;
    age: number;
}

function greetPerson(person: Person) {
    return `Hello, ${person.name}!`;
}
```

### 5. Classes

Classes can implement interfaces and have typed properties and methods:

```typescript
class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}
```

### 6. Generics

Generics allow the creation of reusable components that can work with a variety of types:

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("hello");
```

### 7. Enums

Enums allow for a set of named constants:

```typescript
enum Color {
    Red,
    Green,
    Blue,
}

let c: Color = Color.Green;
```

### 8. Type Assertions

Type assertions allow you to tell the compiler that you know more about the type of a value than it does:

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

### Example: Combining Concepts

Here's an example combining some of these concepts:

```typescript
interface Shape {
    color: string;
}

class Circle implements Shape {
    constructor(public color: string, public radius: number) {}

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

let circle: Circle = new Circle("red", 5);
console.log(circle.area()); // Output: 78.54
```

These examples cover the basics of TypeScript. Let me know if you'd like to delve deeper into any specific topic!
