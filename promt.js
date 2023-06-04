import inquirer from "inquirer";

const preguntas=[
    {
        type: 'input',
        name: 'Tipo de gasto',
        message: "En que se gasto:"
    },
    {
        type: 'input',
        name: 'Monto:',
        message: "Cuanto se gasto "
    },
]


export const promtUser = async()=>{
    return await inquirer.prompt(preguntas)
}
