<script>
    import {
        isLoggedIn,
        tipo_registro,
        total,
        gastos,
        ingresos,
        ingresoTotal,
        gastoTotal,
        cuenta,
        server,confirm
    } from "../stores";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";

    import axios from "axios";

    import LoginBtn from '../components/LoginBtn.svelte'
    import Grafica from '../components/Grafica.svelte'

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

        
    });



    function click_gastos() {
        const btn_gastos = document.querySelector("#btngastos");
        const btn_ingresos = document.querySelector("#btningresos");
        btn_gastos.classList.add("btn-active");
        btn_ingresos.classList.remove("btn-active");
        tipo_registro.set("gastos");
    }

    function click_ingresos() {
        const btn_gastos = document.querySelector("#btngastos");
        const btn_ingresos = document.querySelector("#btningresos");
        btn_ingresos.classList.add("btn-active");
        btn_gastos.classList.remove("btn-active");
        tipo_registro.set("ingresos");
    }

    function show_modal() {
		const modal = document.querySelector(".cont-modal");
		modal.classList.toggle("active");
	}

	function terminar(){
		confirm.set(true)
	}

    function ver(){
        console.log('ver mas ')
        navigate("/test", { replace: true });
    }
</script>

<div>
    {#if $isLoggedIn}
        <h1 class="text-center mt">
            <i class="bx bxs-dollar-circle" />
            Total ${$total}
        </h1>
        <p class="text-center text-small">({$cuenta})</p>

        <div class="cont-btn">

            {#if $tipo_registro == 'ingresos'}
                 <!-- content here -->
                 <button
                    id="btningresos"
                    on:click={click_ingresos}
                    class="btn btn-active">
                    INGRESOS
                </button>

            {:else}
                <button
                    id="btningresos"
                    on:click={click_ingresos}
                    class="btn ">
                    INGRESOS
                </button>
            {/if}


            {#if $tipo_registro == 'gastos'}
                <button 
                    id="btngastos"
                    on:click={click_gastos} 
                    class="btn btn-active">
                    GASTOS
                </button>
            {:else}
                <button 
                    id="btngastos"
                    on:click={click_gastos} 
                    class="btn">
                    GASTOS
                </button>
            {/if}




        </div>
        
        <div class="cont">
            {#if $tipo_registro == 'gastos'}
                 <Grafica/> 
            {:else}
                <Grafica/> 
            {/if}
               
        </div>


        {#if $isLoggedIn}
        <button class="add-btn" on:click={show_modal}>
            <i class="bx bx-plus-circle" />
        </button>

            {#if $gastos.length > 0 || $ingresos.length > 0}
                <button class="end-btn" on:click={terminar}> Terminar seguimiento</button>
            {/if}
        
        {/if}

    {:else}
        <div class="full">
            <div class="ingresa-google">
                <h1>Ingresa con tu cuenta</h1>
                <LoginBtn></LoginBtn>
            </div>
        </div>
    {/if}
    
</div>


<style>
    .ingresa-google{
        max-width: 500px;
        text-align: center;
    }

    .full{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: calc(100vh - 80px)
    }

    .cont{
        display: flex;
        justify-content: center;
    }
</style>
