<script>
        import {isLoggedIn,server,historial} from "../stores";
        import { onMount } from "svelte";
        import { navigate } from "svelte-routing";
        import axios from "axios";

        var respuesta // variable importante aunque se vea que esta aqui solita valiendo verga
        let uid = localStorage.getItem("uid");
        let url = $server + "/historial/" + uid  
        console.log(url)

        onMount(() => {
            if (!$isLoggedIn) {
                navigate("/historial", { replace: true });
            }

            axios.get(url)
            .then((resp) => {
                respuesta = resp.data.data
                historial.set(respuesta)
            });
        });

        function delete_historial(id) {
            var data = {
                'uid' : uid,
                'itemId': id
            }
            axios.delete(url,{data}).then((resp) => {
                respuesta = resp.data.data
                historial.set(respuesta)
            });
        }

        function see(id){
            localStorage.setItem('idHistorial', id);
            navigate("/historial/item", { replace: true });
        }
</script>


<div class="cont-historial">
    {#if $isLoggedIn}

        <div class="cont-items">
            {#each $historial as {id},i}
                
                <div class="historial-item" on:click={() => see($historial[i].id)}>
                    <div>
                        <p>Ingresos: ${$historial[i].ingresoTotal}</p>
                        <p>Gastos: ${$historial[i].gastoTotal}</p>
                    </div>

                    <p class="fecha">Fecha de cierre {$historial[i].nombre}</p>

                    <button on:click={() => delete_historial($historial[i].id)}><i class='bx bxs-trash-alt'></i></button>
                </div>
            {/each}
        </div>


    {/if}
    
</div>


<style>

    .cont-historial{
        width: 100vw;
        height: 100vh;
        padding: 10px;
        overflow-y: scroll;
    }

    .cont-items{
        width: 99%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .historial-item{
        background-color: white;
        border-radius: 10px;
        max-height: 140px;
        max-width: 500px;
        padding: 10px;
        margin: 20px;
        padding-top: 20px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
        position: relative;

        font-weight: 300;
        font-size: 20px;
        letter-spacing: 1.1px;
    }

    .historial-item div{
        display: flex;
        gap: 50px;
    }

    .fecha{
        text-align: right;
    }

    button{
        border: none;
        color: white;
        background-color: rgb(255, 71, 71);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;

        position: absolute;
        top: -20px;
        right: 10px;
        cursor: pointer;
    }
</style>