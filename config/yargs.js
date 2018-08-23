//definiciones
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

//opciones

const optCrear = {
    descripcion
}

const optActualizar = {
    descripcion,
    completado
}

const optBorrar = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crear tarea nueva', optCrear)
    .command('actualizar', 'Actualizar tarea', optActualizar)
    .command('borrar', 'Elimina una tarea', optBorrar)
    .help()
    .argv;


module.exports = {
    argv
}