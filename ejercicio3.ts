class Tarea {
    constructor(public titulo: string, public estado: 'completa' | 'pendiente') {}
  }
  
  // Crear instancias de tareas
  const tarea1 = new Tarea('Hacer la compra', 'pendiente');
  const tarea2 = new Tarea('Hacer ejercicio', 'completa');
  const tarea3 = new Tarea('Leer un libro', 'pendiente');
  
  // Crear una lista de tareas
  const listaDeTareas: Tarea[] = [tarea1, tarea2, tarea3];
  
  // Mostrar los títulos y estados de las tareas
  console.log('Lista de Tareas:');
  listaDeTareas.forEach((tarea, index) => {
    console.log(`Tarea ${index + 1}:`);
    console.log(`  Título: ${tarea.titulo}`);
    console.log(`  Estado: ${tarea.estado}`);
    console.log('-------------------------');
  });
  