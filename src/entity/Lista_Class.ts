import {Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany,} from "typeorm"
import { Aluno } from "./Aluno"
import { Professor } from "./Professor"

@Entity()
export class Lista_Class {

    @PrimaryGeneratedColumn()
    id_Class: number

    @Column()
    Nome: string

    @OneToMany(() => Aluno,(aluno) => aluno.id_Aluno)
    alunos: Aluno[]

    @OneToMany(() => Professor,(professor) => professor.id_Professor)
    Professores: Professor[]
}
