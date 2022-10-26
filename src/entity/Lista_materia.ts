import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { Disciplina } from "./Disciplina";

@Entity('lista_materias')
export class Lista_materia {

    @PrimaryGeneratedColumn()
    id_materia: number;

    @OneToOne(type => Disciplina) @JoinColumn()
    disciplina: Disciplina;




}