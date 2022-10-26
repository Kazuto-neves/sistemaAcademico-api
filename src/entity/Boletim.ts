import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, Double } from "typeorm"
import { Aluno } from "./Aluno";
import { Lista_materia } from "./Lista_materia";
import { Professor } from "./Professor";

@Entity("boletins")
export class Boletim {
    @PrimaryGeneratedColumn()
    id_boletim: number;

    @ManyToOne(type => Aluno, aluno => aluno.id_Aluno)
    aluno: Aluno;

    @ManyToOne(type => Professor, professor => professor.id_Professor)
    professor: Professor;

    @OneToOne(type => Lista_materia) @JoinColumn()
    materias: Lista_materia;

    @Column({type:"decimal",precision:2})
    nota1: Double;

    @Column({type:"decimal",precision:2})
    nota2: Double;

    @Column({type:"decimal",precision:2,nullable:true})
    nota3: Double;

}
