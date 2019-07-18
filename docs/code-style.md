# Code Style

## Enum
```typescript
enum AnimalType {
  DOG = 'DOG',
  CAT = 'CAT'
};
```

## Constants
```typescript
const MESSAGE = {
  SUCCSS: 'great!',
  FAIL: 'oops, fail'
};
```

## Interface
```typescript
interface AnimalModel {
  category: string;
}
```

## Variable
```typescript
const myName = 'JoJo';
let myAge = 18;
```

## Component
```typescript
class HomeComponent {
  /* data for do somthing */
  @Input()
  data: [];

  /* event for something */
  @Output()
  succss = new EventEmitter<Type>();

  banner: string;
  interval: number;

  constructor() {}

  doSomething() {}
}
```

## Folder and filename convention
use kebeb-case, like `home-page.component.ts`
