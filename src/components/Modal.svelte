<script>
    import { tipo_registro,server,total,cuenta,ingresos,gastos,ingresoTotal,gastoTotal } from "../stores";
    
    import axios from 'axios'

    
    var dato = {
        'tipo' : '',
        'categoria':'otro',
        'comentario':'',
        'dinero':'',
        'cuenta':'',
        'uid': localStorage.getItem('uid')
    }

    function enviar() {
        dato['tipo'] = $tipo_registro
        dato['cuenta'] = $cuenta
        axios({
            method: "POST",
            url: $server + "/dinero/",
            data: dato,
        }).then((resp) => {

            var respuesta = resp.data
    
            total.set(respuesta['total'])
            gastos.set(resp.data.gastos)
            ingresos.set(resp.data.ingresos)

            ingresoTotal.set(resp.data.ingreso_total)
            gastoTotal.set(resp.data.gasto_total)

            dato = {
                'tipo' : '',
                'categoria':'otro',
                'comentario':'',
                'dinero':'',
                'cuenta':'',
                'uid': localStorage.getItem('uid')
            }
            
            setTimeout(() => {  close_modal(); }, 1000);
        });
        
    }

    function close_modal() {
        const modal = document.querySelector(".cont-modal");
        modal.classList.toggle("active");
    }
</script>

<div class="cont-modal">
    <div class="modal {$tipo_registro}">
        <div class="cont-close">
            <button on:click={close_modal} class="close-modal">
                <i class="bx bx-x" />
            </button>
        </div>

        <div class="p1">
            <div class="cont-input">
                <i class="bx bx-dollar" />
                <input bind:value={dato.dinero} type="number" placeholder="00"  />
            </div>

            <div class="cont-select mt">
                <p>Cuenta:</p>
                <select name="" id="">
                    <option value="">Principal</option>
                </select>
            </div>

            <h3 class="mt">Categoria</h3>
            <div class="cont-categorias mt">
                {#if $tipo_registro == "ingresos"}
                    <div>
                        <input
                            id="regalo"
                            bind:group={dato.categoria}
                            value="regalo"
                            type="radio"
                        />
                        <label for="regalo">
                            <i class="bx bxs-gift" />
                            <p>Regalo</p>
                        </label>
                    </div>

                    <div>
                        <input
                            id="salario"
                            bind:group={dato.categoria}
                            value="salario"
                            type="radio"
                        />
                        <label for="salario">
                            <i class="bx bx-money-withdraw" />
                            <p>Salario</p>
                        </label>
                    </div>

                    <div>
                        <input
                            id="interes"
                            bind:group={dato.categoria}
                            value="interes"
                            type="radio"
                        />
                        <label for="interes">
                            <i class="bx bxs-bank" />
                            <p>Interes</p>
                        </label>
                    </div>

                    <div>
                        <input
                            id="otro"
                            bind:group={dato.categoria}
                            value="otro"
                            type="radio"
                        />
                        <label for="otro">
                            <i class="bx bx-question-mark" />
                            <p>Otro</p>
                        </label>
                    </div>
                {:else}
                    <div>
                        <input
                            id="trasporte"
                            bind:group={dato.categoria}
                            value="trasporte"
                            type="radio"
                        />
                        <label for="trasporte">
                            <i class="bx bx-bus" />
                            <p>Trasporte</p>
                        </label>
                    </div>

                    <div>
                        <input
                            id="salud"
                            bind:group={dato.categoria}
                            value="salud"
                            type="radio"
                        />
                        <label for="salud">
                            <i class="bx bxs-heart" />
                            <p>Salud</p>
                        </label>
                    </div>

                    <div>
                        <input
                            id="comida"
                            bind:group={dato.categoria}
                            value="comida"
                            type="radio"
                        />
                        <label for="comida">
                            <i class="bx bx-bowl-hot" />
                            <p>Comida</p>
                        </label>
                    </div>

                    <div>
                        <input
                            id="otro"
                            bind:group={dato.categoria}
                            value="otro"
                            type="radio"
                        />
                        <label for="otro">
                            <i class="bx bx-question-mark" />
                            <p>Otro</p>
                        </label>
                    </div>
                {/if}
            </div>

            <div class="cont-input mt">
                <input bind:value={dato.comentario}  type="text" placeholder="comentario" />
            </div>

            <div class="cont-button">
                <button on:click={enviar} class="button">
                    <span class="text">Agregar</span>
                    <i class="bx bx-check button-icon" />
                </button>
            </div>
        </div>
    </div>
</div>
