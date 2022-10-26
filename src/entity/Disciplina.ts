import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Disciplina{

@PrimaryGeneratedColumn()
id_discplina:number;
@Column()
Nome_Dsicplina:string;


}