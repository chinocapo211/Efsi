function Tarea(nombre, descripcion, fecha) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = fecha;
}
function Proyecto(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tareas = [];
    this.agregarTarea = function(nombre, descripcion, fecha) {
        let nuevaTarea = new Tarea(nombre, descripcion, fecha);
        this.tareas.push(nuevaTarea);
    }
}
let arrayProyectos = [];
function buscarEnArray(valor){
    for(let i = 0; i < arrayProyectos.length; i++) {
        if (arrayProyectos[i].nombre === valor) {
          return i;
        }
    }
    return -1;
}

function agregarProyecto(){
    let nombrePr = document.getElementById("proyectoIngreso").value;
    let descripcionPr = document.getElementById("descripcionIngreso").value;
    let ingreso = new Proyecto(nombrePr,descripcionPr);
    arrayProyectos.push(ingreso);
    mostrarProyectos();
}
function agregarTareaPr(){
    let nombrePr = document.getElementById("nombrePr").value;
    let posicionAr = buscarEnArray(nombrePr); 
    if(posicionAr != -1){
        let nombreTar = document.getElementById("tareaIngreso").value;
        let descripcionTar = document.getElementById("descripcionTarea").value;
        let fechaVen = new Date(document.getElementById("fechavenTarea").value);
        let tareaAgregar = new Tarea(nombreTar,descripcionTar,fechaVen);
        arrayProyectos[posicionAr].agregarTarea(tareaAgregar);
        console.log(tareaAgregar.nombre);
        mostrarProyectos();
    }
    else{
        alert("No existe un proyecto con ese nombre");
    }
}
function mostrarTareasDeProyecto() {
    let proyectosHTML = document.getElementById('proyectos');
    proyectosHTML.innerHTML = '';
    let nombreProyecto = document.getElementById('nombreProyecto').value;
    let proyecto = arrayProyectos.find(proyecto => proyecto.nombre === nombreProyecto);
    if (proyecto) {
        let proyectoDiv = document.createElement('div');
        proyectoDiv.classList.add('proyecto');

        let nombreProyectoHeader = document.createElement('h2');
        nombreProyectoHeader.textContent = proyecto.nombre;

        let descripcionProyecto = document.createElement('p');
        descripcionProyecto.textContent = proyecto.descripcion;

        proyectoDiv.appendChild(nombreProyectoHeader);
        proyectoDiv.appendChild(descripcionProyecto);

        let tareasList = document.createElement('ul');
        proyecto.tareas.forEach(tarea => {
            let tareaItem = document.createElement('li');
            let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    tareaItem.style.textDecoration = "line-through";
                } else {
                    tareaItem.style.textDecoration = "none";
                }
            });
            
            let tareaNombre = document.createElement('span');
            let nom = tarea.nombre;
            tareaNombre.textContent = "Nombre: " + nom.nombre + ", Descripción: " + nom.descripcion + ", Fecha: " + nom.fecha;
            
            tareaItem.appendChild(checkbox);
            tareaItem.appendChild(tareaNombre);
            tareasList.appendChild(tareaItem);
        });

        proyectoDiv.appendChild(tareasList);
        proyectosHTML.appendChild(proyectoDiv);
    } else {
        console.log("No se encontró ningún proyecto con el nombre '" + nombreProyecto + "'.");
    }
}
function buscarPorFecha(){
    let proyectosHTML = document.getElementById('proyectos');
    proyectosHTML.innerHTML = '';
    let nombreProyecto = document.getElementById('nombreProy').value;
    let proyecto = arrayProyectos.find(proyecto => proyecto.nombre === nombreProyecto);
    if (proyecto) {
        let proyectoDiv = document.createElement('div');
        proyectoDiv.classList.add('proyecto');

        let nombreProyectoHeader = document.createElement('h2');
        nombreProyectoHeader.textContent = proyecto.nombre;

        let descripcionProyecto = document.createElement('p');
        descripcionProyecto.textContent = proyecto.descripcion;

        proyectoDiv.appendChild(nombreProyectoHeader);
        proyectoDiv.appendChild(descripcionProyecto);

        let tareasList = document.createElement('ul');
        let fechaVencimientoTexto = document.getElementById('fechaVen').value;
        let fechaVencimiento = new Date(fechaVencimientoTexto);
        proyecto.tareas.forEach(tarea => {
            let nom = tarea.nombre;
            if(nom.fecha.getTime() === fechaVencimiento.getTime()){ // Comparar los números de tiempo en lugar de las fechas directamente
                let tareaItem = document.createElement('li');
                let tareaNombre = document.createElement('span');
                tareaNombre.textContent = "Nombre: " + nom.nombre + ", Descripción: " + nom.descripcion + ", Fecha: " + nom.fecha;
                tareaItem.appendChild(tareaNombre);
                tareasList.appendChild(tareaItem);
            }
        });

        proyectoDiv.appendChild(tareasList);
        proyectosHTML.appendChild(proyectoDiv);
    } else {
        console.log("No se encontró ningún proyecto con el nombre '" + nombreProyecto + "'.");
    }
}

function mostrarProyectos() {
    let proyectosHTML = document.getElementById('proyectos');
    proyectosHTML.innerHTML = '';
    arrayProyectos.forEach(function(proyecto) {
        let proyectoDiv = document.createElement('div');
        proyectoDiv.classList.add('proyecto');
        
        let nombreProyecto = document.createElement('h2');
        nombreProyecto.textContent = proyecto.nombre;
        
        let descripcionProyecto = document.createElement('p');
        descripcionProyecto.textContent = proyecto.descripcion;
        
        proyectoDiv.appendChild(nombreProyecto);
        proyectoDiv.appendChild(descripcionProyecto);
        proyectosHTML.appendChild(proyectoDiv);
    });
}