import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne,OneToMany} from "typeorm"
//import { Pessoa } from "./Pessoa"
import { Lista_materias } from "./Lista_materias";
import { Entrar } from "./Entrar";

@Entity()
export class Aluno {

    @PrimaryGeneratedColumn()
    id_Aluno: number

    /*@OneToMany(() => Pessoa,(pessoa) => pessoa.id_Pessoa)
    pessoas: Pessoa[]*/

    @Column("varchar",{length:60})
    nome: string

    @Column("date")
    data_Nasc: Date

    @Column("varchar",{length:60})
    email: string

    @Column("varchar",{length:60})
    senha: string

    @OneToMany(() => Lista_materias,(materia) => materia.id_materia)
    Materias: Lista_materias[]

    @OneToOne(() => Entrar)
    entrar: Entrar
}
