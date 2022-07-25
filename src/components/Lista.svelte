 <script>
    import {ingresos,gastos,ingresoTotal,gastoTotal,modalItem,idModalItem} from '../stores'


    function infoItem(id){
        console.log('press item ' +  id)
        idModalItem.set(id)
        modalItem.set(true)
    }
 </script>
 
 
<div class="lista">

    <div class="ingresos_items">
        <h1>$ {$ingresoTotal}</h1>
    
        <div class="cont-list">
    
            {#each $ingresos as {comentario,dinero,id}}
                <div class="item" on:click={() => infoItem(id)}>
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
    </div>

    <div class="gastos_items dysplay-none">
        <h1>$ {$gastoTotal}</h1>
    
        <div class="cont-list">
    
            {#each $gastos as {comentario,dinero,id}}
                <div class="item" on:click={() => infoItem(id)}>
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

</div>

 <style>

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

    .item:hover{
       cursor: pointer;
        background-color: steelblue;
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

     h1{
         text-align: center;
     }
     .lista{
        margin-top: 30px;
        padding: 5px;
        justify-content: center;
     }

     .cont-list{
        width: 100vw;
        height: 50vh;
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: scroll;
     }
 </style>