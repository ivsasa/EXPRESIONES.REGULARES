"use strict";

//Capturar nodo
const expreg = document.querySelector("#expreg");//Nodo (HTMLSelectElement) para seleccionar la expresion regular
const message = document.querySelector(".campo"); //Nodo (HTMLDiveElement) para escribir los mensajes al usuario

//Funciones
const buscarIvonne = () =>{
    
    //Busqueda exacta en una cadena
    const patron = /ivonne/;
    //Busqueda con mayusculas y minusculas --con flags
    const patronMayMin = /ivonne/i;
    let cadena = prompt("Dame tu nombre");
    if(cadena===null){//pulse el boton cancelar
    return; 
    }
    if(patron.test(cadena)){
       message.innerHTML = `El texto <strong>ivonne</strong> se encuentra en la cadena`;
    }else{
        message.innerHTML = `El texto <strong>ivonne</strong> no coincide con el criterio de búsqueda "${cadena}" `;
    }
    
}

//Validamos un codigo postal con expresion regular

/**
 * 
 * @param {objeto} patron Expresion regular con formato /xxxx/
 */
const validarCP = (patron) =>{
    let cp = prompt("Dame un CP");
    if(cp===null)//Si le damos cancelar
        return;
    if(patron.test(cp)){
        message.innerHTML = `${cp} es un CP valido`

    }else{
        message.innerHTML = `${cp} no es un CP valido`
    }
}

//Evento
// expreg.addEventListener(
//     "change",
//     () =>{
//         console.log("ok")
//     }
//     )


//Evento del selector (select)
    expreg.onchange = (e) =>{
        //capturo el value del nodo (que es un select)
        switch(e.target.value){
            case "1":
                //instrucciones
                buscarIvonne();
                break;
            
            case "2":
                validarCP(/^[0-9][0-9][0-9][0-9][0-9]$/,2);    
                break;
               
            
            default:
                alert("No existe la opción")
                break;

        }
        
}
