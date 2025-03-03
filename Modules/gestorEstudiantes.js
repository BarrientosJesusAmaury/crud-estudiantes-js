import Estudiante from "./Estudiante.js";

class GestorEstudiantes {
  constructor() {
    this.estudiantes = [];
  }

  agregar(nombre, edad, nivel) {
    const estudiante = new Estudiante(nombre, edad, nivel);
    this.estudiantes.push(estudiante);
  }

  listar() {
    this.estudiantes.forEach(est => {
      console.log(`ID: ${est.id}, Nombre: ${est.nombre}, Edad: ${est.edad}, Nivel: ${est.nivel}`);
    });
  }

  actualizar(id, nombre, edad, nivel) {
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id === id) {
        this.estudiantes[i].nombre = nombre;
        this.estudiantes[i].edad = edad;
        this.estudiantes[i].nivel = nivel;
        return;
      }
    }
  }

  eliminar(id) {
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id === id) {
        this.estudiantes.splice(i, 1);
        return;
      }
    }
  }
}

export default GestorEstudiantes;