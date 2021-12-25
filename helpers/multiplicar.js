const fs = require('fs');//IMPORTAMOS LA LIBRERIA DE File System (fs)
const colors = require('colors');



const mostrarLista = (base,salidaPorConsola)=>{
    console.log('========================'.green);
    console.log('    TABLA DEL: '.green, colors.blue(base));
    console.log('========================'.green);
    console.log(salidaPorConsola);
}
//-imprimir tabla del 5 por consola
const tablaDelNumero=async(base=2,hasta=10,listar=false)=>{//Por default si no envian valores asume esos valores
   
    try{    
        let salida = ''//`========================\n    TABLA DEL: ${base}\n========================\n`;
        let consola = ''

        for(i=1;i<=hasta;i++){
            salida += `${base} x ${i} = ${base*i} \n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i} \n`;
        } 
        
        listar? mostrarLista(base,consola):null; 

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return " "+`tabla-${base}.txt creada\n`;
    }catch(err){
        throw err;
    }
}

module.exports = { 
    tablaDelNumero // Redundante poner tablaDelNumero: tablaDelNumero 
};