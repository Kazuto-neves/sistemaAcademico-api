import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Acesso {

    @PrimaryGeneratedColumn()
    id_acesso: number

    @Column()
    pass: string

    @Column()
    descricao: string

}
