import GestorEstudiantes from "./GestorEstudiantes.js";
import readline from "readline";

const gestor = new GestorEstudiantes();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("1. Agregar Estudiante");
  console.log("2. Listar Estudiantes");
  console.log("3. Actualizar Estudiante");
  console.log("4. Eliminar Estudiante");
  console.log("5. Salir");
  rl.question("Seleccione una opción: ", function (opcion) {
    if (opcion === "1") {
      rl.question("Nombre: ", function (nombre) {
        rl.question("Edad: ", function (edad) {
          rl.question("Nivel: ", function (nivel) {
            gestor.agregar(nombre, edad, nivel);
            menu();
          });
        });
      });
    } else if (opcion === "2") {
      gestor.listar();
      menu();
    } else if (opcion === "3") {
      rl.question("ID del estudiante: ", function (id) {
        rl.question("Nuevo Nombre: ", function (nombre) {
          rl.question("Nueva Edad: ", function (edad) {
            rl.question("Nuevo Nivel: ", function (nivel) {
              gestor.actualizar(Number(id), nombre, edad, nivel);
              menu();
            });
          });
        });
      });
    } else if (opcion === "4") {
      rl.question("ID del estudiante: ", function (id) {
        gestor.eliminar(Number(id));
        menu();
      });
    } else if (opcion === "5") {
      rl.close();
    } else {
      menu();
    }
  });
}
menu();