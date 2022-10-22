import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id_user: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    pass: string

    @Column()
    id_acesso: number

}
