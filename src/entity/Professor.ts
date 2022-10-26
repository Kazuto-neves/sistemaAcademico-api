import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, OneToMany } from "typeorm"
//import { Pessoa } from "./Pessoa";
import { Entrar } from "./Entrar";

@Entity('professores')
export class Professor {

    @PrimaryGeneratedColumn()
    id_Professor: number

    @Column({ type: "varchar", length: 60 })
    nome: string

    @Column({ type: "date" })
    data_Nasc: Date

    @Column({ type: "varchar", length: 60 })
    email: string

    @Column({ type: "varchar", length: 60 })
    senha: string

    @OneToOne(() => Entrar) @JoinColumn()
    entrar: Entrar
    /*@OneToMany(() => Pessoa,(pessoa) => pessoa.id_Pessoa)
    pessoas: Pessoa[]*/
}
