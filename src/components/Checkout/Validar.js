


export const Validar = (values) => {

    if(values.nombre.length < 5 ){
        alert('El nombre es mu corto')
        return false
    }

    if(values.email.length < 7 ){
        alert('El email es inválido')
        return false
    }

    if(values.tel.length < 8){
        alert('El teléfono es invalido')
        return false
    }

    return true

}