const { tablaDelNumero} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();//Limpia la consola

tablaDelNumero(argv.b, argv.h,argv.l)
    .then( nombreDelArchivo => console.log(nombreDelArchivo))
    .catch( err => console.log(err));