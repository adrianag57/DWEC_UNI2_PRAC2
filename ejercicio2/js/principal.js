import Instituto from "./instituto.js";
import Grupo from "./grupo.js";

var grupo1 = new Grupo(1, 23);
var grupo2 = new Grupo(2, 15);
var grupos = [grupo1, grupo2];

var instituto1 = new Instituto(1, "IES FLEMING", grupos);

console.log("El codigo del " + instituto1.Nombre +  " es: " + instituto1.Codigo);
console.log("El número total de alumnos del " + instituto1.Nombre + " es: " + instituto1.numeroAlumnos());

var grupo3 = new Grupo(3, 8);
instituto1.addGrupos(grupo3);
console.log(grupos);