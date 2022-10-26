import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne} from "typeorm"
import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";
import { Entrar } from "./Entrar";
import { Professor } from "./Professor";

@Entity()
export class Lista_aluno{

    @PrimaryGeneratedColumn()
        id_lista:number;
    @ManyToOne(type=>Aluno, aluno => aluno.id_aluno)
        aluno:Aluno;   
    @OneToOne(type=>Disciplina) @JoinColumn()
        disciplina:Disciplina;
    @ManyToOne(type=>Professor, professor => professor.id_professor)
        professor:Professor;
 

}
