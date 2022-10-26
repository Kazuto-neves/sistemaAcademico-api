import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { Disciplina } from "./Disciplina";

@Entity()
export class Lista_materias {

    @PrimaryGeneratedColumn()
    id_materia: number;
    
    @OneToOne(type => Disciplina) @JoinColumn()
    disciplina: Disciplina;




}