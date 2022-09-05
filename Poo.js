class Alumno {
    constructor(nombre, apellido, califFinal, inscrito, calificaciones) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.califFinal = califFinal;
        this.inscrito = inscrito;
        this.calificaciones = [];
    }
    ObtenerInicialesDeAlumno(){
        return "las iniciales del alumno son " + this.nombre.charAt(0) + this.apellido.charAt(0);
    }

    ObtenerNombreCompleto(){
        return this.nombre + this.apellido;

    }

    aprobado(){
        if(this.califFinal>6){
            return "Aprobado"
        }else{
            return "No aprobado"
        }
    }


    estaInscrito() {
        if(this.inscrito)
            return "El alumno esta inscrito"
        else
            return "El alumno NO esta inscrito"
    }
    
    queDemoniosEsElThis() {
        return this
    }
    
    
    agregarCalificacion(materia, promedio) {
        let materia_obj = {
            nombre: materia,
            promedio: promedio
        }
        this.calificaciones.push(materia_obj)
        // this.calificaciones.push(promedio) // solo con array
    }
    
    obtenerPromedio() {
        let suma = 0
        
        for(let i = 0; i<this.calificaciones.length;i++) {
            suma += this.calificaciones[i].promedio // {nombre: "Matematicas", promedio: 8.5 }
            //suma = suma + this.calificaciones[i]
        }
        
        return suma/this.calificaciones.length
    }
}



let mackaber = new Alumno("mackaber", "witckin", 8.0, false)
let dolores = new Alumno("Dolores", "Parra", 10.0, true)
let eduardo = new Alumno("Eduardo", "Gomez", 9.0, false)