<script>
    import {Router,Link,Route,navigate} from 'svelte-routing'
    import {signOut} from 'firebase/auth'
    import {auth} from '../firebase'
    import{isLoggedIn,user} from '../stores'

    import LoginBtn from '../components/LoginBtn.svelte'

    const logout = () =>{
        try {
            signOut(auth)
            $isLoggedIn = false
            $user = {}
            localStorage.clear();
            navigate('/',{replace:true})
        } catch (error) {
            console.log(error)
        }
    }

    function close_sidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.classList.toggle('active')
    }


</script>


<section class="sidebar active">

    {#if $isLoggedIn}
        <img src = {$user.photoURL} alt="">
        <h1>{$user.displayName}</h1>
    {:else}
        <img src="https://imgs.search.brave.com/2SWSRD0B1BwKIwCa8TT4b3dAB62qYWx799kVx72zL0E/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/d1hkMEg2N2l0NVlJ/OE0zNHZNNHBRSGFI/YSZwaWQ9QXBp" alt="">
        <h1>Inicia sesión</h1>
    {/if}


    <Router>
        <nav>
            {#if $isLoggedIn}
                <li on:click={close_sidebar} class="sidebar-item">
                    <i class='bx bx-home' ></i>
                    <Link to = '/'>Inicio</Link>
                </li>

                <li on:click={close_sidebar} class="sidebar-item">
                    <i class='bx bx-calendar-alt' ></i>
                    <Link to = '/historial'>Historial</Link>
                </li>

                <li on:click={close_sidebar} class="sidebar-item" on:click={logout}>
                    <i class='bx bx-log-out'></i>
                    Cerrar sesión
                </li>

                
            {:else}
                <div on:click={close_sidebar}>
                   <LoginBtn></LoginBtn>
                </div>
            {/if}

        </nav>
    </Router>

</section>