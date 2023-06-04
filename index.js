import inquirer from "inquirer";
import { save, get } from "./leerArchivo.js";
import { promtUser } from "./promt.js";

const run = async()=>{
    const user = await promtUser()

    const userJson= await get("./gastos.json")

    const nuevaData=[...userJson,user]
    
    save("./gastos.json", nuevaData)

    console.log(user)
}

run()