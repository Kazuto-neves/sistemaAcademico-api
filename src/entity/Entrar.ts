import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"
@Entity()
export class Entrar{

@PrimaryGeneratedColumn()
id_acesso:number;
@Column()
senha:string;
@Column()
descricao:string;
@Column()
tipo:boolean;



}
