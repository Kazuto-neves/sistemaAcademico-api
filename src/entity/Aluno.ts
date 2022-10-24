import {Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany,} from "typeorm"
import { Pessoa } from "./Pessoa"
import { Materia_Diciplina } from "./Materia_Diciplina"

@Entity()
export class Aluno {

    @PrimaryGeneratedColumn()
    id_Aluno: number

    @OneToMany(() => Pessoa,(pessoa) => pessoa.id_Pessoa)
    pessoas: Pessoa[]

    @OneToMany(() => Materia_Diciplina,(materia) => materia.id_Materia_Diciplina)
    Materias: Materia_Diciplina[]
}
