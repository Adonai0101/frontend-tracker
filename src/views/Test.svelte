<script>
    import Lista  from '../components/Lista.svelte'
    import {ingresos,gastos,ingresoTotal,gastoTotal,server,cuenta,isLoggedIn,total,tipo_registro} from '../stores'
    import { navigate } from "svelte-routing";
    import { onMount } from "svelte";
    import axios from "axios";

    onMount(() => {
        if (!$isLoggedIn) {
            navigate("/", { replace: true });
        }

        let uid = localStorage.getItem("uid");


        let url = $server + "/dinero/" + uid + "/" + $cuenta; 

        axios.get(url)
        .then((resp) => {
            var respuesta = resp.data

            total.set(respuesta['total'])
            gastos.set(resp.data.gastos)
            ingresos.set(resp.data.ingresos)

            ingresoTotal.set(resp.data.ingreso_total)
            gastoTotal.set(resp.data.gasto_total)

        });

        if($tipo_registro == 'ingresos'){
            console.log('test ingresos')
            const ingresos_items = document.querySelector(".ingresos_items");
            const gastos_items = document.querySelector(".gastos_items");
            gastos_items.classList.add('dysplay-none')
            ingresos_items.classList.remove('dysplay-none')
        }
        else{
            console.log('test gatos')
            //agregando la "transicion" de gastos e ingresos
            const ingresos_items = document.querySelector(".ingresos_items");
            const gastos_items = document.querySelector(".gastos_items");
            gastos_items.classList.remove('dysplay-none')
            ingresos_items.classList.add('dysplay-none')
        }
    });
</script>

<div>
    {#if $isLoggedIn}
        <div class="">
            <Lista/>
        </div>
    {:else}
        <h1>pura masacuata</h1>
    {/if}

</div>