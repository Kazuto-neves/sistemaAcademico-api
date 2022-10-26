import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";
import { Professor } from "./Professor";

@Entity('lista_alunos')
export class Lista_aluno {

    @PrimaryGeneratedColumn()
    id_lista: number;

    @ManyToOne(type => Aluno, aluno => aluno.id_Aluno)
    alunos: Aluno;

    @OneToOne(type => Disciplina) @JoinColumn()
    disciplinas: Disciplina;

    @ManyToOne(type => Professor, professor => professor.id_Professor)
    professores: Professor;


}
