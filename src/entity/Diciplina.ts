import {Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany,} from "typeorm"
import { Professor } from "./Professor"

@Entity()
export class Diciplina {
    @PrimaryGeneratedColumn()
    id_Diciplina: number

    @Column()
    Nome: string

    @OneToMany(() => Professor,(professor) => professor.id_Professor)
    professores: Professor[]
}
