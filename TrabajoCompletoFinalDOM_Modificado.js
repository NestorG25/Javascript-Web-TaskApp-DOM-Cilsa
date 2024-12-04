/***************************************/
/*Ingresar nombre y apellido por PROMPT*/
/***************************************/
        
var nuevoalumno = prompt("Ingresa tu nombre.");
var lastname = prompt("Ingresa tu apellido.");
        
listaalumnos = ["Laura", "Daniel", "Monica", "Susana", "Nahuel"]

if(listaalumnos.includes(nuevoalumno)){
    alert("El visitante ya esta en la lista")    
    } else {listaalumnos.push(nuevoalumno)}


//*******************************************/
/* Nombre ingresado en mensaje de bienvenida */
/*******************************************/
window.onload = function mensajeBienvenida() {
// Obtener el contenedor de información
var info = document.getElementById("infopag");

// Crear un párrafo para el mensaje de bienvenida
var mensajeBienvenida = document.createElement("p");
mensajeBienvenida.textContent = "Bienvenido/a, " + nuevoalumno + " " + lastname + ". Gracias por usar nuestra página web!";

// Insertar el mensaje en el contenedor
info.appendChild(mensajeBienvenida);

// Llamar a la función para mostrar el número de enlaces
mostrarConteoEnlaces();
};

/*******************************************/
/* Añadir nuevo enlace al primer párrafo */
/*******************************************/
var primerP = document.querySelector('#primerParrafo');
if (primerP) {
// Añadir la lista de alumnos al párrafo
primerP.innerHTML += "<br>" + listaalumnos.join("<br>");
}

/************************************************************/
/* Mostrar el número de enlaces en la página */
/************************************************************/
function mostrarConteoEnlaces() {
// Obtener el contenedor de información
var info = document.getElementById("infopag");

// Verificar si existe el contenedor
if (info) {
    // Crear un párrafo para el conteo de enlaces
    var conteoEnlaces = document.createElement("p");
    conteoEnlaces.textContent = "El documento contiene " + document.links.length + " enlaces.";
    
    // Insertar el conteo de enlaces en el contenedor
    info.appendChild(conteoEnlaces);
}
}


/*************************************************************/
/*Añadir nuevo nombre a la lista de visitas H3 primer parrafo*/
/*************************************************************/
function nuevoNombre() {
// Solicitar el nombre y apellido por prompt
var nombreIngresado = prompt("Ingresa tu nombre:");
var apellidoIngresado = prompt("Ingresa tu apellido:");

// Verificar que ambos valores sean válidos
if (nombreIngresado && apellidoIngresado) {
    // Crear un nuevo elemento <li>
    var newListItem = document.createElement("li");
    
    // Crear el texto del nombre completo
    var fullName = document.createTextNode(nombreIngresado + " " + apellidoIngresado);
    
    // Agregar el texto al elemento <li>
    newListItem.appendChild(fullName);
    
    // Obtener el elemento padre (la lista con id 'alumnos')
    var padre = document.getElementById("alumnos");
    
    // Agregar el nuevo elemento <li> a la lista
    if (padre) {
        padre.appendChild(newListItem);
    } else {
        console.error("No se encontró el elemento con ID 'alumnos'.");
    }
} else {
    alert("Por favor, ingresa un nombre y apellido válidos.");
}
}

/*******************************************/
/*Añadir nombre a la lista mediante un botón*/
/*******************************************/
function añadirNombre(){
var newList = document.createElement("li");
newName = document.createTextNode(nuevoalumno+" "+lastname);
newList.appendChild(newName);
var padre = document.getElementById("alumnos");
padre.appendChild(newList);

document.getElementById("bot1").style.display="none";
document.getElementById("bot2").style.display="block";
}
/**********************************************/
/*Retirar nombre de la lista mediante un botón*/
/**********************************************/
function retirarNombre() {
        // Obtener la lista de alumnos
        var remoList = document.getElementById("alumnos");

        // Verificar si la lista tiene elementos
        if (remoList.lastElementChild) {
        // Eliminar el último elemento de la lista
        remoList.removeChild(remoList.lastElementChild); 
        
        // Mostrar el botón "Añadir su Nombre" y ocultar "Retirar su Nombre" si la lista está vacía
        if (!remoList.hasChildNodes()) {
                document.getElementById("bot1").style.display = "block";
                document.getElementById("bot2").style.display = "none";
        }
        }
}
/****************************************************/
/*Mostramos el contenido faltante del ultimo parrafo*/
/****************************************************/
function mostrarContenido() {
var ultimoP = document.getElementById("adicional"); // El texto adicional
var elemento2 = document.getElementById("leerMenos"); // El enlace "Leer menos"
var enlace = document.getElementById("enlace"); // El enlace "Seguir leyendo"

// Mostrar el contenido adicional y "Leer menos"
ultimoP.className = "visible";
elemento2.className = "visible";

// Ocultar el enlace "Seguir leyendo"
enlace.className = "oculto";
}

function ocultarSpan() {
var leerMenos = document.getElementById("adicional"); // El texto adicional
var elemento2 = document.getElementById("leerMenos"); // El enlace "Leer menos"
var enlace = document.getElementById("enlace"); // El enlace "Seguir leyendo"

// Ocultar el contenido adicional y "Leer menos"
leerMenos.className = "oculto";
elemento2.className = "oculto";

// Mostrar el enlace "Seguir leyendo"
enlace.className = "visible";
}

/**********************************************/
/*            Funciones de la Clase4           */
/**********************************************/

function genero4() {
    // Obtenemos todos los elementos con el nombre "gen" (los radio buttons) (getElementsByName)
    let radios = document.getElementsByName("gen");
    
    // Comprobamos cuál radio button está seleccionado (Checked)
    let genSeleccionado = "";
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            genSeleccionado = radios[i].value;  // Obtener el valor del radio button seleccionado
            break;
        }
    }

    // Realizamos las acciones según el género seleccionado
    if (genSeleccionado === "Masculino") {
        alert("Seleccionaste el género Masculino");
    } else if (genSeleccionado === "Femenino") {
        alert("Seleccionaste el género Femenino");
    } else {
        alert("Género no reconocido");
    }
    return genSeleccionado;
}

//Desafio 4 - Pagina Nueva
function CompararDesafio4() {
    let num1 = parseInt(document.getElementById("n1").value)
    let num2 = parseInt(document.getElementById("n2").value)
    if (num1 > num2) {
        alert("El número mayor es el primer numero" )
        //console.log("El número mayor es numero 1")
    } else if (num1 < num2) {
        alert("El número mayor es el segundo numero " )
        //console.log("El número mayor es numero 2"); // Imprime 100
    } else {
        alert("Los números son iguales");
        //console.log("Iguales");
    }  
}

function sumarDesafio4 () {
    let c4 = parseInt(document.getElementById("v1").value)
    let d4 = parseInt(document.getElementById("v2").value)
    alert("La suma de los numeros es: " + (c4 + d4))
    let resultadoSuma =  c4 + d4 
    return resultadoSuma
    document.write ("La suma de los numeros es: " + (resultadoSuma))
}

//Desafio 4 - Pagina Nueva
function resultadoRadiobutton() {
    // Obtenemos todos los radio buttons
    let radios = document.getElementsByName("nombre_del_radio"); // Asegúrate de usar el nombre correcto
    let resultadoRadiobutton = "";  // Inicializamos la variable

    // Iteramos sobre todos los radios para verificar cuál está seleccionado
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            resultadoRadiobutton = radios[i].value;  // Asignamos el valor del radio button seleccionado
            break;  // Salimos del ciclo una vez que encontramos el seleccionado
        }
    }

    // Dependiendo del valor seleccionado, mostramos una alerta
    if (resultadoRadiobutton === "opcion1") {
        alert("Ha seleccionado la opción 1.");
    } else if (resultadoRadiobutton === "opcion2") {
        alert("Ha seleccionado la opción 2.");
    } else {
        alert("No ha seleccionado ninguna opción.");
    }

    return resultadoRadiobutton; // Retornamos el valor seleccionado
}


/****************************************************/
/*TASK APP*/
/****************************************************/

//alert("Works!")
//console.log document.getElementById('formTask').addEventListener('submit', saveTask);
document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
    alert('enviando formulario');
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    console.log(description);
    //console.log("title",title);
    //console.log("description",description);
    //console.log(task)

    let task = {
        title,
        description
    };

    if (localStorage.getItem('tasks') === null) { // Si no hay tareas en localStorage
        let tasks = [];//agrega
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else { // Si ya hay tareas en localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks')); // Obtiene tareas antiguas
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Almacena nuevamente
    }
    getTasks();
    document.getElementById('formTask').reset();
    e.preventDefault();
}
function deleteTask(title) {
    //console.log("deleteTask",title);
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title === title) { // Encuentra la tarea por su título
            tasks.splice(i, 1); // Elimina la tarea
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Actualiza localStorage
    getTasks(); // Refresca la lista de tareas
}

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')); // Si no hay tareas, asigna un array vacío
    let tasksView = document.getElementById('tasks'); // Div donde se mostrarán las tareas
    tasksView.innerHTML = ''; // Limpia el contenido anterior

    // Iterar sobre las tareas y crear su representación en HTML
        for (let i = 0; i < tasks.length; i++) {
            let title = tasks[i].title;
            let description = tasks[i].description;
        tasksView.innerHTML += `<div class="card mb-3">
                <div class="card-body">
                    <p>${title} - ${description}
                    <a href=#  onclick="deleteTask('${title}')"class="btn btn-danger ml-5">Delete</a>
                    </p>
                </div>
            </div>`;
    }
}
// Llama a getTasks al cargar la página
getTasks();