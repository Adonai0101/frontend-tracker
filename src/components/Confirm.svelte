<script>
    import { confirm,server,cuenta,total,ingresos,gastos,ingresoTotal,gastoTotal,categorias,valores} from "../stores";
    import axios from "axios";


    var uid = localStorage.getItem("uid");

    function aceptar(){
        console.log('terminando')
		let dato = {
			'uid':uid,
			'cuenta':$cuenta
		}
		axios({
            method: "POST",
            url: $server + "/terminar/",
            data: dato,
        }).then((resp) => {
			//pasando a las variables los nuevos valores
			total.set(resp.data.total)
            gastos.set(resp.data.gastos)
            ingresos.set(resp.data.ingresos)
            ingresoTotal.set(resp.data.ingreso_total)
            gastoTotal.set(resp.data.gasto_total)

            //limpiamos los valores de las graficas
            categorias.set([])
            valores.set([])

            cancelar()
			
        });
    }
    function cancelar(){
        confirm.set(false)
    }
</script>


<div class="cont-confirm">
    <div class="confirm">
        <h1>¿Estás seguro que deseas continuar?</h1>
        <p>Esto eliminara todos los registros, pero no te preocupes,
            podras seguir consultandolos en <span>historial</span></p>
        
        <div class="botones">
            <button on:click={aceptar} class="btn btn-dark">Aceptar</button>
            <button on:click={cancelar} class="btn btn-danger">Cancelar</button>
        </div>
    </div>
</div>

<style>
    span{
        font-weight: bolder;
    }
    .cont-confirm{
        background: rgba(0, 0, 0, 0.642);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0px;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;

    }
    .confirm {
        background: white;
        width: 80%;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 100px;
        text-align: center;
    }
    .botones{
        margin-top: 20px;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }
    .btn-danger {
        background: #dc3545;
        color: white;
    }
    .btn-dark {
        color: white;
        background: #202231;
    }
</style>