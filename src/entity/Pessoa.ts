import {Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany,} from "typeorm"
import { Acesso } from "./Acesso"

@Entity()
export class Pessoa {

    @PrimaryGeneratedColumn()
    id_Pessoa: number

    @Column()
    nome: string

    @Column()
    decricao: string

    @Column()
    email: string

    @Column()
    Data_Nasc: Date

    @OneToMany(() => Acesso,(acesso) => acesso.id_acesso)
    acessos: Acesso[]
}
