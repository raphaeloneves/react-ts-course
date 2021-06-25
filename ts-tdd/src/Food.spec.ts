import Food from "./Food";
import {Nutritions} from "./types";
import {EmptyFoodNameError, InvalidPropertyValueError} from "./errors";

describe("Food test suit", ()=> {
    it('should create a Food instance', () => {
        const mockNutritions: Nutritions = {
            amount: 100,
            calories: 100,
            carbohydrate: 100,
            protein: 100
        }
        const food =  new Food("rice", "g", mockNutritions);
        expect(food).toBeDefined();
        expect(food.getName()).toEqual("rice")
        expect(food.getBaseUnit()).toEqual('g')
        expect(food.getNutritions()).toBeDefined()
        expect(food.getNutritions().amount).toEqual(100)
        expect(food.getNutritions().carbohydrate).toEqual(100)
        expect(food.getNutritions().calories).toEqual(100)
        expect(food.getNutritions().protein).toEqual(100)
    });

    it('should throw error when creating food with empty name', () => {
        const mockNutritions: Nutritions = {
            amount: 100,
            calories: 100,
            carbohydrate: 100,
            protein: 100
        }
        const food =
        expect(() => new Food("", "g", mockNutritions))
            .toThrowError(EmptyFoodNameError)
    });

    it('should throw error when creating food with zero amount', () => {
        const mockNutritions: Nutritions = {
            amount: 0,
            calories: 100,
            carbohydrate: 100,
            protein: 100
        }
        expect(() => new Food("rice", "g", mockNutritions))
            .toThrowError(InvalidPropertyValueError)
    });
})