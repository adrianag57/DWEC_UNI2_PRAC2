export default class Instituto{

    constructor (id, nombre, grupo){
    this._id=id;
    this._nombre=nombre;
    this._grupo=grupo;
}

get Codigo() {

    return this._id;
}

set Codigo(id){

    return this._id = id;
}

get Nombre() {

    return this._nombre;
}

set Nombre(nombre){

    return this._nombre = nombre;
}

numeroAlumnos() {

    let cantidad = 0;

    for (let i = 0;  i < this._grupo.length; i++) {

        cantidad += this._grupo[i]._numAlum;

    }

    return cantidad;
}

addGrupos(grupo) {

    this._grupo.push(grupo);
}

}