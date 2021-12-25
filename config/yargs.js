const { describe } = require('yargs');

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
                    if(isNaN(argv.number || argv.b)){
                        throw 'La  base no es un numero y tiene que serlo'
                    }else return true 
                })
                .argv;


module.exports = argv;