import {Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany,} from "typeorm"
import { Diciplina } from "./Diciplina"

@Entity()
export class Materia_Diciplina {

    @PrimaryGeneratedColumn()
    id_Materia_Diciplina: number

    @OneToMany(() => Diciplina,(diciplina) => diciplina.id_Diciplina)
    diciplinas: Diciplina[]
}
