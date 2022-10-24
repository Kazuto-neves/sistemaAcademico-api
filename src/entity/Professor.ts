import {Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany,} from "typeorm"
import { Pessoa } from "./Pessoa"

@Entity()
export class Professor {

    @PrimaryGeneratedColumn()
    id_Professor: number

    @OneToMany(() => Pessoa,(pessoa) => pessoa.id_Pessoa)
    pessoas: Pessoa[]
}
