import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, Double } from "typeorm"
import { Aluno } from "./Aluno";
import { Lista_materias } from "./Lista_materias";
import { Professor } from "./Professor";

@Entity()
export class Boletim {
    @PrimaryGeneratedColumn()
    id_boletim: number;

    @ManyToOne(type => Aluno, aluno => aluno.id_Aluno)
    aluno: Aluno;

    @ManyToOne(type => Professor, professor => professor.id_Professor)
    professor: Professor;

    @OneToOne(type => Lista_materias) @JoinColumn()
    materias: Lista_materias;

    @Column("decimal",{precision:2})
    nota1: Double;

    @Column("decimal",{precision:2})
    nota2: Double;

    @Column("decimal",{precision:2,nullable:true})
    nota3: Double;

}
