import "reflect-metadata"
import { DataSource } from "typeorm"
import { Entrar } from "./entity/Entrar";
import { Lista_materia } from "./entity/Lista_materia";
import { Professor } from "./entity/Professor";
import { Lista_aluno } from "./entity/Lista_aluno";
import { Disciplina } from "./entity/Disciplina";
import { Boletim } from "./entity/Boletim";
import { Aluno } from "./entity/Aluno";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username:"postgres",
    password: "123456",
    database: "Faeterj-Petropolis",
    synchronize: true,
    logging: false,
    entities: [Entrar,Lista_materia,Professor,Lista_aluno,Disciplina,Boletim,Aluno],
    migrations: [],
    subscribers: [],
})
