import { Role } from "./role"

export type User = {
    id : number,
    name: string,
    email: string,
    cpf: string,
    phone: string,
    roles: Role[]
}