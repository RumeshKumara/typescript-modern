# Basic Theory in TypeScript

TypeScript is a superset of JavaScript that adds static typing. It helps catch errors early and improves code maintainability.

## Key Concepts

- **Types**: TypeScript introduces types such as `number`, `string`, `boolean`, `any`, `void`, `unknown`, and custom types.
- **Type Inference**: TypeScript can automatically infer types based on variable values.
- **Interfaces**: Used to define the shape of objects.
- **Classes**: TypeScript supports object-oriented programming with classes, inheritance, and access modifiers.
- **Functions**: You can specify parameter and return types for functions.
- **Generics**: Allow writing reusable and flexible code components.

## Example

```typescript
interface User {
  name: string;
  age: number;
}

function greet(user: User): string {
  return `Hello, ${user.name}`;
}
```

## More Concepts

- **Enums**: Allow defining a set of named constants.
- **Type Aliases**: Create custom names for types.
- **Union & Intersection Types**: Combine multiple types for flexible type definitions.
- **Modules**: Organize code into reusable files using `import` and `export`.
- **Tooling**: TypeScript uses the `tsc` compiler and integrates with editors for type checking and autocompletion.

### Example: Enum, Type Alias, Union

```typescript
enum Role {
  Admin,
  User,
  Guest
}

type ID = string | number;

function getUserRole(id: ID): Role {
  // ...implementation...
  return Role.User;
}
```

### Example: Module

```typescript
// user.ts
export interface User {
  name: string;
  age: number;
}

// main.ts
import { User } from './user';
```

## Advanced Concepts

- **Decorators**: Special annotations for classes and members, used for meta-programming (requires enabling in `tsconfig.json`).
- **Namespaces**: Used to organize code and avoid naming conflicts (less common, modules are preferred).
- **Type Assertions**: Override TypeScript's inferred type using `as` or angle brackets.
- **Utility Types**: Built-in types like `Partial<T>`, `Readonly<T>`, `Pick<T, K>`, `Record<K, T>`, etc., for manipulating types.
- **Configuration**: The `tsconfig.json` file controls compiler options, strictness, and project structure.

### Example: Type Assertion & Utility Type

```typescript
let value: unknown = "hello";
let strLength: number = (value as string).length;

interface User {
  name: string;
  age: number;
}
type PartialUser = Partial<User>;
```

### Example: Decorator

```typescript
function Log(target: any, propertyKey: string) {
  console.log(`Property decorated: ${propertyKey}`);
}

class Example {
  @Log
  myProperty: string;
}
```

### Example: Namespace

```typescript
namespace Geometry {
  export function area(radius: number): number {
    return Math.PI * radius * radius;
  }
}
console.log(Geometry.area(5));
```

TypeScript's rich type system and tooling help build robust, scalable applications with fewer runtime errors.

TypeScript code is compiled to JavaScript, making it compatible with any JavaScript environment.
