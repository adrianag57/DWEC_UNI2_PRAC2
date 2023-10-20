export default class Grupo{

    constructor (id , numAlum){
    this._codigo=id;
    this._numAlum=numAlum;
}

get Codigo(){

    return this._codigo;
    }

set Codigo(codigo){

    return this._codigo = codigo;
}
    
get Numero(){

    return this._apellido;
    }

set Numero(numero) {

    return this._numAlum = numero;
}

}

