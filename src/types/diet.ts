import { Meal } from './meal'
import { User } from './user'

export type Diet = {
    id: number,
    name: string,
    description: string
    startDate: string,
    endDate: string,
    users: User[],
    meals: Meal[]
}