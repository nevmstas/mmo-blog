import { Race, Role } from "src/types/enums"

export class UpdateUserDto {
    name: string | null
    gender: string | null
    race: Race | null
    email: string | null
    role: Role | null
}