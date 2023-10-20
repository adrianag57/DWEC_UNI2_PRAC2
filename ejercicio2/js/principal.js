import Instituto from "./instituto.js";
import Grupo from "./grupo.js";

var instituto1 = new Instituto(1, "IES FLEMING", 1);
var grupo1 = new Grupo(1, 23);

console.log("El codigo del " + instituto1.Nombre +  " es: " + instituto1.Codigo);
instituto1.numeroAlumnos();
instituto1.addGrupos(grupo1);