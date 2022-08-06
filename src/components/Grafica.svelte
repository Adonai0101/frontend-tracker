<script>
    import { Chart, registerables } from "chart.js";
    import { onMount } from "svelte";
    import { categorias,valores,server,tipo_registro} from "../stores";
    import { navigate } from "svelte-routing";
    import axios from "axios";


    var total = ""
    onMount(() => {
        //obteniendo los datos para la grafica
        let uid = localStorage.getItem("uid");
        let url = $server + "/dinero/grafica";
        let dato = {
            uid: uid,
            tipoRegistro: $tipo_registro,
        };

        axios({
            method: "POST",
            url: url,
            data: dato,
        }).then((resp) => {

            var data = resp.data;
            total = data.total
            categorias.set(data.categoria)
            valores.set(data.valor)
            
            //render grafica
            var contGrafica = document.querySelector("#grafica");
            Chart.register(...registerables);
            var grafica = new Chart(contGrafica, {
                type: "doughnut",
                data: {
                    labels: $categorias,
                    datasets: [
                        {
                            data: $valores,
                            backgroundColor: ["#4D7D91", "#A3C8DB", "#E5ECF4","#000000"],
                        },
                    ],
                },
            });
        });

    });

    function test() {
        navigate('/listado',{replace:true})
    }
</script>

<div>
    <p>{$tipo_registro}: {total} </p>
    <canvas on:click={test} id="grafica" />
</div>

<style>
    p{
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1.3px;
    }
    div {
        width: 80%;
        height: 80%;

        max-width: 500px;
        max-height: 500px;
        margin-top: 20px;
    }
</style>
