
import fs from "fs"


export const get = (file) => {
    return new Promise((resolve,rejects)=>{
        fs.readFile(file,"utf-8",(error,contenido)=>{
            if(error){
                rejects(error)
            }else{
                resolve(JSON.parse(contenido))
            }
        })
    })
}

export const save = (file,newData)=>{
    return new Promise((resolve,rejects)=>{
        fs.writeFile(file, JSON.stringify(newData),(error)=>{
            if(error){
                rejects(error)
            }else{
                resolve("Se escribio el archivo correctamente")
            }
        })
    })
}
