function saludar(){
    console.log('Buen dia Node');
}

let datos= 2500;

module.exports.datos= datos;

//ej d funcion flecha
module.exports.saludar= saludar();
