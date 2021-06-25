export class EmptyFoodNameError extends Error {
    constructor(message: string = "Food name cannot be blank") {
        super(message);
    }
}

export class InvalidPropertyValueError extends Error {
    constructor(message: string) {
        super(message);
    }
}