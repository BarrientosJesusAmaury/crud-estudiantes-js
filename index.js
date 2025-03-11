import readline from "readline";
import { GestorEstudiantes } from "./gestorEstudiantes.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n📚 Gestión de Estudiantes");
    console.log("1. Agregar estudiante");
    console.log("2. Listar estudiantes");
    console.log("3. Actualizar estudiante");
    console.log("4. Eliminar estudiante");
    console.log("5. Salir");
    rl.question("Elige una opción: ", (opcion) => {
        manejarOpcion(opcion);
    });
}

function manejarOpcion(opcion) {
    switch (opcion) {
        case "1":
            rl.question("Nombre: ", (nombre) => {
                rl.question("Edad: ", (edad) => {
                    rl.question("Nivel: ", (nivel) => {
                        GestorEstudiantes.crearEstudiante(nombre, parseInt(edad), nivel);
                        mostrarMenu();
                    });
                });
            });
            break;
        case "2":
            GestorEstudiantes.listarEstudiantes();
            mostrarMenu();
            break;
        case "3":
            rl.question("ID del estudiante a actualizar: ", (id) => {
                rl.question("Nuevo nombre: ", (nuevoNombre) => {
                    rl.question("Nueva edad: ", (nuevaEdad) => {
                        rl.question("Nuevo nivel: ", (nuevoNivel) => {
                            GestorEstudiantes.actualizarEstudiante(parseInt(id), nuevoNombre, parseInt(nuevaEdad), nuevoNivel);
                            mostrarMenu();
                        });
                    });
                });
            });
            break;
        case "4":
            rl.question("ID del estudiante a eliminar: ", (id) => {
                GestorEstudiantes.eliminarEstudiante(parseInt(id));
                mostrarMenu();
            });
            break;
        case "5":
            console.log("Saliendo...");
            rl.close();
            break;
        default:
            console.log("Opción no válida.");
            mostrarMenu();
    }
};
mostrarMenu();