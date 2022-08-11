import {writable} from 'svelte/store'

export const user = writable({})
export const isLoggedIn = writable(false)

export let tipo_registro = writable('ingresos')

export let cuenta = writable("principal")
//comentario de shit solo para el commit

//server prod
//export const server = writable('https://backend-tracker.onrender.com')
//server dev
export const server = writable('http://localhost:5000/')

// aqui manejaremos las variables de los items
export let total = writable("0")
export let ingresos = writable([])
export let gastos = writable([])
export let ingresoTotal = writable("0")
export let gastoTotal = writable("0")

//variables para el modal item
export let modalItem = writable(false)
export let idModalItem = writable("")

//variable para mostrar el modal confirm
export let confirm = writable(false)


//variables para el historial (lista de historikal)
export let historial = writable([])
//variable para el historial (items por item)
export var historialItem = writable([])

//variables para la grafica
export let categorias = writable([])
export let valores = writable([])