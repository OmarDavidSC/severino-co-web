import { SPParse } from "src/app/utils/SPParse";


export class EDirector {
    Id: string;
    Nombre: string;
    Apellido: string;
    Edad: any;
    Nacionalidad: string;
    Foto: string;


    constructor() {
        this.Id = "";
        this.Nombre = "";
        this.Apellido = "";
        this.Edad = "";
        this.Nacionalidad = "";
        this.Foto = "";


    }

    public static parsearObjeto(key: any, element: any): EDirector {

        const objeto = new EDirector();

        objeto.Id = key;
        objeto.Nombre = SPParse.getString(element["Nombre"]);
        objeto.Apellido = SPParse.getString(element["Apellido"]);
        objeto.Edad = SPParse.getNumber(element["Edad"]);
        objeto.Nacionalidad = SPParse.getString(element["Nacionalidad"]);
        objeto.Foto = SPParse.getString(element["Foto"]);

        return objeto;
    }


    public static parsearListaObjeto(elements: any): EDirector[] {
        const listado: EDirector[] = [];

        if (elements != null) {
            Object.keys(elements).forEach(key => {
                const element = elements[key];
                const objeto: EDirector = EDirector.parsearObjeto(key, element);
                listado.push(objeto);
            });
        }


        return listado;
    }
}