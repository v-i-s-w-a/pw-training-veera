export class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static createFromObject(obj: { name: string; age: number }): User {
        return new User(obj.name, obj.age);
    }
}