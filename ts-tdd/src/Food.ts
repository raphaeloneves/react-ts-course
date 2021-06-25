import {Nutritions} from "./types";
import {EmptyFoodNameError, InvalidPropertyValueError} from "./errors";

export default class Food {
    constructor(
        private readonly name: string,
        private readonly baseUnit: string,
        private readonly nutritions: Nutritions
    ) {
        this.validateFoodName(name);
        this.validateFoodAmount(nutritions.amount);
    }

    private validateFoodAmount(foodAmount: number) {
        if (foodAmount == 0) throw new InvalidPropertyValueError("Food amount must be greater than zero")
    }

    private validateFoodName(name: string) {
        if (!name) throw new EmptyFoodNameError()
    }

    getName(): string {
        return this.name
    }

    getBaseUnit(): string {
        return this.baseUnit
    }

    getNutritions(): Nutritions {
        return this.nutritions
    }
}