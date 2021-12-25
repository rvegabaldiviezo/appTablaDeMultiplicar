const argv = require('yargs')
                .options('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe:  'Es la base de la tabla de multiplicar'
                })
                .options('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe:  'Es el limite de la cantidad de multiplicaciones a realizar'
                })
                .options('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe:  'Muestra la tabla de multiplicar'
                })
                .check((argv,options)=>{
                    const condParamNum = isNaN(argv.b)||isNaN(argv.h)
                   
                    if(condParamNum) throw `EL PARAMETRO/S DEBE/EN SER UN NUMERO, MIRAR LAS OPCIONES!`;   

                    return true 
                })
                .argv;


module.exports = argv;