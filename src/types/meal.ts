import { Food } from "./food"

export type Meal = {
    id: number,
    name: string,
    timeHour: string,
    foods: Food[]
}