import {writable} from 'svelte/store'

export const user = writable({})
export const isLoggedIn = writable(false)

export let tipo_registro = writable('ingresos')

export let cuenta = writable("principal")


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


//variables para el historial
export let historial = writable([])


//variables para la grafica
export let categorias = writable([])
export let valores = writable([])