<script>

    function handleSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.classList.toggle('active')
    }
    
</script>


<section class="nav-bar">
    <h1>Tracker</h1>
    <button on:click={handleSidebar} class="nav-btn"><i class='bx bx-menu-alt-right'></i></button>
</section>