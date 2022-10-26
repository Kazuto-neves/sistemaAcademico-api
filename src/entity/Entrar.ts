import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity("acessos")
export class Entrar {

    @PrimaryGeneratedColumn()
    id_acesso: number;

    @Column({ type: "varchar", length: 60 })
    senha: string;

    @Column({ type: "tinyint" })
    tipo: boolean;



}
