import GestorEstudiantes from "./gestorEstudiantes.js";

class Reportes {
    constructor(gestor) {
        this.gestor = gestor;
    }

    calcularPromedioPorEstudiante() {
        return this.gestor.estudiantes.map(est => ({
            nombre: est.nombre,
            promedio: est.calcularPromedio(),
            nivel: est.nivel
        }));
    }

    filtrarPorPromedio(umbral) {
        return this.calcularPromedioPorEstudiante().filter(est => est.promedio >= umbral);
    }

    rankingEstudiantes() {
        return this.calcularPromedioPorEstudiante().sort((a, b) => b.promedio - a.promedio);
    }
}

export default Reportes;