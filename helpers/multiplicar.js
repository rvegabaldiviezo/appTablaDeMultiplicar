const fs = require('fs');//IMPORTAMOS LA LIBRERIA DE File System (fs)
const colors = require('colors');

const mostrarLista = (base,salidaPorConsola)=>{
    console.log('========================'.green);
    console.log('    TABLA DEL: '.green, colors.white(base));
    console.log('========================'.green);
    console.log(salidaPorConsola);
}
//Crea y guarda en un archivo la tabal de multiplicar de un numero base.
const tablaDelNumero=async(base=2,hasta=10,listar=false)=>{//Por default toma esos valores si no envian otros. 
   
    try{    
        let salida = '', consola = '';

        for(i=1;i<=hasta;i++){
            salida += `${base} x ${i} = ${base*i} \n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i} \n`;
        } 
        
        if(listar) mostrarLista(base,consola); 

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creada\n`.red;
    }catch(err){
        throw err;
    }
}

module.exports = { 
    tablaDelNumero // Redundante poner tablaDelNumero: tablaDelNumero 
};