import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Disciplina {

    @PrimaryGeneratedColumn()
    id_disciplina: number;

    @Column()
    Nome_Disciplina: string;


}