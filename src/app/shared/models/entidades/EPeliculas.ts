import { SPParse } from "src/app/utils/SPParse";


export class EPeliculas {
    Id: string;
    Nombre: string;
    Lanzamiento: any;
    Director: string;
    Categoria: string;
    Duracion: any;
    Activo: boolean;
    TextoActivo: string;


    constructor() {
        this.Id = "";
        this.Nombre = "";
        this.Lanzamiento = "";
        this.Director = "";
        this.Categoria = "";
        this.Duracion = "";
        this.Activo = false;
        this.TextoActivo = "";
    }


    public static parsearObjeto(key: any, element: any): EPeliculas {
        const objeto = new EPeliculas();

        objeto.Id = key;
        objeto.Nombre = SPParse.getString(element["Nombre"]);
        objeto.Lanzamiento = SPParse.getNumber(element["Lanzamiento"]);
        objeto.Director = SPParse.getString(element["Director"]);
        objeto.Categoria = SPParse.getString(element["Categoria"]);
        objeto.Duracion = SPParse.getNumber(element["Duracion"]);
        objeto.Activo = SPParse.getBool(element["Activo"]);
        objeto.TextoActivo = objeto.Activo ? "Si" : "No";
        return objeto;
    }

    public static parsearListaObjeto(elements: any): EPeliculas[] {

        const listado: EPeliculas[] = [];
        if (elements != null) {
            Object.keys(elements).forEach(key => {
                const element = elements[key];
                const objeto: EPeliculas = EPeliculas.parsearObjeto(key, element);
                listado.push(objeto);
            })
        }

        return listado;

    }
}