import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, Double} from "typeorm"
import { Aluno } from "./Aluno";
import { Entrar } from "./Entrar";
import { Lista_materias } from "./Lista_materias";
import { Professor } from "./Professor";

@Entity()
export class Boletim{
    @PrimaryGeneratedColumn()
        id_boletim:number;
    @ManyToOne(type=>Aluno, aluno => aluno.id_aluno)
        aluno:Aluno; 
    @ManyToOne(type=>Professor, professor => professor.id_professor)
        professor:Professor;
    @OneToOne(type=>Lista_materias) @JoinColumn()
        materias:Lista_materias;
    @Column()
        nota1:Double;
    @Column()
        nota2:Double;
    @Column()
        nota3:Double;
}
