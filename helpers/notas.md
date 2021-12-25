
-LA VENTAJA DE LA DESUSTRUCTURACION ES QUE PODEMOS DARLE UN VALOR POR DEFECTO 
-EL PACKAGE JSON:
    - Para correr un scrip declarado en tal package.json se puede usar: npm run base3
    - Las dependencias son paquetes necesarios para que se ejecute nuestra aplicacion(
        por ejemplo la de colors).
    -Para descargar una version especifica se usa el @abstract, xej: npm i yargs@16.2.0, es decir se descarga la version 16.2.0 
 
    -Comandos, ej:
    npm uninstall color (desinstala el paquete de colores)
    npm install color || npm i color(instala el paquete de colores en su ultima version)
    npm i color@1.0.0 (instala el paquete de colores en la version especifica que le indicamos)
    npm update (actualiza los paquetes a su ultima version)

    -CON EL package-lock.json SE QUE PAQUETES NECESITA MI APPS PARA FUNCIONAR, corriendo
    el comando 'npm install' recupero todos los que me faltan. 
    * 
    -Ejemplo de como se reciben argumentos por consola:
        console.log(process.argv)
        console.log(argv);
            console.log(argv.base);
            console.log(argv.limite);

OTROS NOTAS:

const fs = require('fs');//IMPORTAMOS LA LIBRERIA DE File System (fs)
const { number } = require('yargs');

//tablaDelNumero(0)
 //   .then( tabla => console.log(tabla,'TABLA CREADA!!!'))
  //  .catch( err => console.log(err));

//Obtiene del process argv LOS ARGUMEMETOS QUE RECIVE POR CONSOLA Y EN EL ORDEN QUE FUERON INGRESADOS 
//const [,,argv3 = 'base=5'] = process.argv;
//const [,base=5] = argv3.split('=');//Separa al string a partir del caracter que le pasamos

//console.log(base);

//tablaDelNumero(base)
//    .then( tabla => console.log(tabla,'TABLA CREADA!!!'))
//    .catch( err => console.log(err));