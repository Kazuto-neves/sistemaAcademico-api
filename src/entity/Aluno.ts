import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne,OneToMany} from "typeorm"
//import { Pessoa } from "./Pessoa"
import { Lista_materia } from "./Lista_materia";
import { Entrar } from "./Entrar";
import { type } from "os";

@Entity('alunos')
export class Aluno {

    @PrimaryGeneratedColumn()
    id_Aluno: number

    /*@OneToMany(() => Pessoa,(pessoa) => pessoa.id_Pessoa)
    pessoas: Pessoa[]*/

    @Column({type:"varchar",length:60})
    nome: string

    @Column({type:"date"})
    data_Nasc: Date

    @Column({type:"varchar",length:60})
    email: string

    @Column({type:"varchar",length:60})
    senha: string

    @OneToMany(() => Lista_materia,(materia) => materia.id_materia)
    Materias: Lista_materia[]

    @OneToOne(() => Entrar) @JoinColumn()
    entrar: Entrar
}
