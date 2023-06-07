import inquirer from "inquirer";
import { save, get } from "./leerArchivo.js";
import { promtUser } from "./promt.js";


const menu = async() =>{
    console.log('°°°°°°°°°°°°°°°°')
    console.log('     Tp N°1     ')   
    console.log('°°°°°°°°°°°°°°°°')
    const opciones = await inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message:'Selecciona una opcion',
            choices:[
                {value: 1 , name: 'Agregar nuevo gasto'},
                {value: 2 , name: 'Ver lista de gastos'},
                {value: 3 , name: 'Salir'}
            ]
        },
    ])

    switch (opciones.choices){
        case 1 : 
            await crearNuevoGasto();
            break
        case 2 :
            await obtenerGastos();
            break
        case 3 :
            break
    }
}

menu()

const crearNuevoGasto= async()=>{
    const user = await promtUser()

    const userJson= await get("./gastos.json")

    const nuevaData=[...userJson,user]
    
    save("./gastos.json", nuevaData)

    console.log(user)
}

const obtenerGastos=async()=>{
    const listaGastos=await get("./gastos.json")
    console.log(listaGastos)
}