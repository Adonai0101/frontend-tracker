<script>
    import { onMount } from "svelte";
    import { modalItem, idModalItem, server,cuenta,total,ingresos,gastos,ingresoTotal,gastoTotal } from "../stores";
    import axios from "axios";


    var uid = localStorage.getItem("uid");
    var idItem = $idModalItem;
    var url = $server + "/dinero/item/" + uid + "/" + idItem + "/" + $cuenta;

    //data es para el metodo "modificar"
    var data = {
        'dinero': '200',
        'comentario':'estos es una notishit'
    }

    onMount(() => {

        axios.get(url).then((resp) => {
            const respuesta = resp.data;
            // se agregan los datos para mistrar al modal
            data.dinero = respuesta.dinero
            data.comentario = respuesta.comentario
        });
    });

    function closeModalItem() {
        modalItem.set(false);
    }

    function modificarModalItem() {
        console.log("modificar shit");
        axios.put(url, data).then((resp) => {
    
            //pasando a las variables los nuevos valores
            total.set(resp.data.total)
            gastos.set(resp.data.gastos)
            ingresos.set(resp.data.ingresos)
            ingresoTotal.set(resp.data.ingreso_total)
            gastoTotal.set(resp.data.gasto_total)

            //cerrando el modal
            modalItem.set(false)
        });
    }


    function eliminarModalItem() {
        console.log("eliminar shit");
        console.log(url)
        axios.delete(url).then((resp) => {
    
            //pasando a las variables los nuevos valores
            total.set(resp.data.total)
            gastos.set(resp.data.gastos)
            ingresos.set(resp.data.ingresos)
            ingresoTotal.set(resp.data.ingreso_total)
            gastoTotal.set(resp.data.gasto_total)

            //cerrando el modal
            modalItem.set(false)
        });

    }
</script>

<div class="cont-modal-item">
    <div class="modal-item">
        <div on:click={closeModalItem} class="header">
            <i class="bx bx-x" />
        </div>
        <div class="body">
            <div class="cont-input">
                <i class="bx bx-dollar" />
                <input bind:value={data.dinero} type="number" placeholder="00" />
            </div>

            <div class="cont-input">
                <i class="bx bx-edit" />
                <input bind:value={data.comentario} type="text" placeholder="inserta una nota" />
            </div>

            <div class="cont-btn">
                <button on:click={modificarModalItem} class="btn btn-dark"
                    >Modificar</button
                >
                <button on:click={eliminarModalItem} class="btn btn-danger"
                    >Eliminar</button
                >
            </div>
        </div>
    </div>
</div>

<style>
    .cont-modal-item {
        padding: 0px;
        margin: 0px;
        width: 100vw;
        height: 100vh;
        background-color: rgba(41, 41, 41, 0.558);
        position: fixed;
        top: 0px;
        z-index: 1;
        display: block;
    }

    .modal-item {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 40vh;
        background-color: white;
    }

    .header {
        width: 100%;
        height: 40px;
        font-size: 30px;
        font-weight: bolder;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        padding-right: 10px;
    }

    .header i {
        cursor: pointer;
    }

    .body {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: none;
    }

    .body .btn-danger {
        background: #dc3545;
        color: white;
    }
    .body .btn-dark {
        color: white;
        background: #202231;
    }

    .body .cont-input {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }

    .body .cont-input input {
        width: 40%;
        text-align: center;
        border: none;
        padding: 5px;
        font-size: 18px;
    }
    .body .cont-input input:focus {
        outline: none;
    }
</style>
