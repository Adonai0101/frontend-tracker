<script>
    import {isLoggedIn,server,historialItem,historialItemGastos,historialItemIngresos} from "../stores";
    import { onMount } from "svelte";
    import axios from "axios";

    var id = localStorage.getItem("idHistorial")
    var url = $server + '/historial/item/' + id 

    var respuesta 
    onMount(() => {

            axios.get(url)
            .then((resp) => {
                respuesta = resp.data
                var gastos = respuesta.gastos
                var ingresos = respuesta.ingresos
                historialItem.set(respuesta)
                historialItemIngresos.set(ingresos)
                historialItemGastos.set(gastos)
                console.log($historialItem)
            });
        });
</script>


<div class="cont-historialItem">
    {#if $isLoggedIn}
        <h1 class="text-center">Total: ${$historialItem.total}</h1>

        <div class="col-2">
            <p>Ingresos: ${$historialItem.ingresoTotal}</p>
            <p>Gastos: ${$historialItem.gastoTotal}</p>
        </div>

        <div class="cont-registros">
            <div class="cont-ingresos">
                <h3 class="text-center">Ingresos</h3>
                {#each $historialItemIngresos as {comentario,dinero,id}}
                    <div class="item">
                        <i class='bx bx-dollar-circle ingresos-icon'></i>
                        {#if comentario == ''}
                            <p>otro</p>
                        {:else}
                            <p>{comentario}</p>
                            
                        {/if}
                        
                        <p>${dinero}</p>
                    </div>
                {/each}
            </div>

            <div class="cont-gastos">
                <h3 class="text-center">Gastos</h3>
                {#each $historialItemGastos as {comentario,dinero,id}}
                    <div class="item">
                        <i class='bx bx-dollar-circle gastos-icon'></i>
                        {#if comentario == ''}
                            <p>otro</p>
                        {:else}
                            <p>{comentario}</p>
                            
                        {/if}
                        
                        <p>${dinero}</p>
                    </div>
                {/each}
            </div>

        </div>
    {/if}
    
</div>

<style>
    .cont-historialItem{
        padding: 20px;
        overflow-y: scroll;
    }
    .col-2{
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-top: 20px;
        margin-bottom: 20px;

        font-size: 16px;
        letter-spacing: 1.2px;
        font-weight: bold;
    }


    .text-center{
        text-align: center;
    }

    .ingresos-icon{
        background-color: rgb(107, 185, 107);
    }

    .gastos-icon{
        background-color: rgb(237, 86, 59);
    }

    .item{
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        gap:30px;

        justify-content: center;
        align-items: center;

        font-size: 20px;
        font-weight: bolder;
        text-align: center;

        padding: 20px;
        border-radius: 5px;
        margin-left: 10px;
        margin-right: 15px;

    }

    i{
        font-size: 30px;
        border-radius: 50%;
        padding: 3px;
        color: white;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>