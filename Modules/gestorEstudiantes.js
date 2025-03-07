import Estudiante from "./estudiantes.js";

class GestorEstudiantes {
  constructor() {
    this.estudiantes = [];
  }

  agregar(nombre, edad, nivel) {
    const estudiante = new Estudiante(nombre, edad, nivel);
    this.estudiantes.push(estudiante);
  }

  listar() {
    return this.estudiantes.map(est => ({
        id: est.id,
        nombre: est.nombre,
        edad: est.edad,
        nivel: est.nivel
    }));
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