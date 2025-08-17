//Inicializar valores 
let valor;
let lista;
let contador;
let amigo;
let textoListaAmigos;

//Función para la configuración inicial (Ayudará tambien cuando se quiera reiniciar el juego)
function configuracionInicial(){
    valor = "";
    lista=[];
    contador =1;
    amigo = "";
    textoListaAmigos = "";
    rellenarTexto("h1","Challenge Amigo Secreto");
    rellenarTexto(".button","Elegir amigo secreto")
    rellenarTexto(".resultado","");
    rellenarTexto(".reiniciar","");
    rellenarTexto("p","Escribe los nombres de tus amigos y prepárate… ¡a ver quién será tu amigo secreto! 🎁");
}

//Función para generar un número aleatorio dentro del rango de la cantidad de elementos dentro de la lista de amigos
function generarNumeroRandom(conjunto){
    return (Math.floor(Math.random() * (conjunto.length)));
};

//Función para limpiar la entrada (input)
function limpiarEntrada(){
    document.querySelector("#entrada").value="";
};

//Función para rellenar texto
function rellenarTexto(etiqueta,valor){
    let elemento = document.querySelector(etiqueta);
    elemento.innerHTML = valor;
};

//Función para verificar si el input esta vacio
function verificarElementoVacio(entrada){
    if (entrada != ""){
        return (true)
    }
    else{
        return (false)
    }
};

//Función para verificar si la lista esta vacia
function verificarListaVacia(lista){
    if (lista != ""){
        return (true)
    }
    else{
        return (false)
    }
};

//Función para atrapar los nombres de los amigos
function atraparEntrada(){
    valor = document.getElementById("entrada").value;
    if (verificarElementoVacio(valor)){
        lista.push(valor);
        while (contador <= lista.length){
            amigo = lista[contador -1];
            textoListaAmigos = textoListaAmigos + " <ion-icon name='person-circle-outline'></ion-icon> " + amigo + " "
            rellenarTexto(".lista",textoListaAmigos)
            limpiarEntrada();
            contador ++;
        }
    }
    else{
        alert("Ingrese el nombre por favor")
    }
};

//Función para elegir aleatoriamente al amigo secreto
function elegirAmigoSecreto(){
    if (verificarListaVacia(lista)){
        rellenarTexto(".lista","")
        rellenarTexto(".reiniciar","Reiniciar juego")
        rellenarTexto(".resultado",`Tu amigo secreto será  <b class="amigosecreto">: ${lista[generarNumeroRandom(lista)]}</b>`)    
    }
    else{
        alert("No hay ningun amigo aún.")
    }
};

//Función para reiniciar el juego
function reiniciar(){
    configuracionInicial();
}

//Configuracion inicial de la lógica y la interfaz del juego
configuracionInicial();