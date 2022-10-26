import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('diciplinas')
export class Disciplina {

    @PrimaryGeneratedColumn()
    id_disciplina: number;

    @Column({ type: "varchar", length: 80 })
    Nome_Disciplina: string;


}