import { AppDataSource } from "./data-source"
import { Entrar } from "./entity/Entrar"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const acesso = new Entrar()
    /*user.nome = "Timber"
    user.email = "Timer@gmail.com"
    user.pass = "saw48"
    user.id_acesso = 2
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id_user)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")*/

}).catch(error => console.log(error))


"Tive uma ideia"
"Se agente usar o data source pra gerenciar"
