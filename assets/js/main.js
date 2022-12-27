let tareas = [
    {id: 0,
    tarea: "Ir de compras",
    realizada: false},
    {id: 1,
    tarea: "Cocinar el almuerzo",
    realizada: false},
    {id: 2,
    tarea: "Realizar la tarea de Desafio Latam",
    realizada: false,
    }
]
let idTarea = 3
let totalRealizadas = 0
let totalNoRealizadas = 0
let realizadas = document.querySelector("#realizadas")
let noRealizadas = document.querySelector("#no-realizadas")

const imprimirTarea = () => {
    let idTareas = document.querySelector("#id")
    let listadoTarea = document.querySelector("#tarea")
    let totalTareas = document.querySelector("#total-tareas")
    idLista = ""
    listaTarea = ""
    for(item of tareas){
        idLista += `<li>${item.id}</li>`
        listaTarea += `<li>${item.tarea}
                        <input class="check" type="checkbox" ${item.realizada ? 'checked' : ''} onclick="realizada(${item.id})">
                        <span class="delete" onclick="borrar(${item.id})">X</span>
                    </li>`
    }
    idTareas.innerHTML = idLista
    listadoTarea.innerHTML = listaTarea
    totalTareas.innerHTML = tareas.length
    realizadas.innerHTML = totalRealizadas
    noRealizadas.innerHTML = tareas.length - totalRealizadas
} 

const borrar = (id) => {
    const confirm = window.confirm("Estás segura que quieres eliminar esta tarea?")
    if(!confirm) return
    const index = tareas.findIndex((tarea) => tarea.id === id)
    if(tareas[index].realizada == true){
        totalRealizadas--
    }
    tareas.splice(index, 1)
    imprimirTarea()
}

const realizada = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id)
    if(tareas[index].realizada == true){
        totalRealizadas--
        tareas[index].realizada = false
    }
    else if(tareas[index].realizada == false){
        totalRealizadas++
        tareas[index].realizada = true
    }
    imprimirTarea()
}

document.querySelector("#add").addEventListener("click", function(){
    agregarTarea()
})

document.querySelector("#new").addEventListener("keydown", function(event){
    if (event.keyCode === 13){
        agregarTarea()
    }
});

const agregarTarea = () => {
    let nuevaTarea = document.querySelector("#new")
    if(nuevaTarea.value == ""){
        return
    }
    else {
        let id = idTarea++
        let tarea = {
            id: id,
            tarea: nuevaTarea.value,
            realizada: false
        }
        tareas.push(tarea)
        imprimirTarea()
        nuevaTarea.value = ""
    }
}

imprimirTarea()



