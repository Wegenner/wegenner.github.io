//Funcion que genera un color aleatorio ( rejo, verde, azul)

function CambiarAleatorio(elemento){
    
    let opcion = Math.floor(Math.random()*3+1);

    switch(opcion){
        case 1:
            elemento.style.color = "red"
            break;
        case 2:
            elemento.style.color = "blue"
            break;
        case 3:
            elemento.style.color = "green"
            break;
        default:
            elemento.style.color = "White"
            break
    }
}