import {Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany,} from "typeorm"
//import { Pessoa } from "./Pessoa";
import { Entrar } from "./Entrar";

@Entity()
export class Professor {

    @PrimaryGeneratedColumn()
    id_Professor: number

    @Column("varchar",{length:60})
    nome: string

    @Column("date")
    data_Nasc: Date

    @Column("varchar",{length:60})
    email: string

    @Column("varchar",{length:60})
    senha: string

    @OneToOne(() => Entrar)
    entrar: Entrar
    /*@OneToMany(() => Pessoa,(pessoa) => pessoa.id_Pessoa)
    pessoas: Pessoa[]*/
}
