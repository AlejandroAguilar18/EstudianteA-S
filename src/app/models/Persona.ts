export class Persona{
    id:number;
    nombre:string;
    apellido:string;
    promedio: number;
    carrera:string;
    constructor(id:number, nombre:string, 
        apellido:string, promedio:number,
        carrera:string){
            this.id=id;
            this.nombre=nombre;
            this.apellido=apellido;
            this.promedio=promedio;
            this.carrera=carrera;
    }
}