<script>
	import { Router, Route } from "svelte-routing";
	import { onMount } from "svelte";

	import { onAuthStateChanged } from "firebase/auth";
	import { auth } from "./firebase";
	import { isLoggedIn, user,confirm , modalItem} from "./stores";

	import Home from "./views/Home.svelte";
	import Historial from "./views/Historial.svelte";
	import Test from "./views/Test.svelte";

	import Navbar from "./components/Navbar.svelte";
	import Sidebar from "./components/Sidebar.svelte";
	import Modal from "./components/Modal.svelte";
	import Modalitem from "./components/ModalItem.svelte";
	import Confirm from "./components/Confirm.svelte";

	

	onMount(() => {
		onAuthStateChanged(auth, (user_auth) => {
			$user = user_auth;
			$isLoggedIn = !!user_auth;
		});
	});

</script>

<main>
	<div class="main-display">
		<Navbar />
		<Sidebar />
		<Modal />
		{#if $confirm}
			<Confirm></Confirm>
		{/if}
		
		<div class="contenido">
			
			
			<Router>
				<Route path="/">
					<Home />
				</Route>

				<Route path="/historial">
					<Historial></Historial>
				</Route>

				<Route path="/test">
					<Test></Test>
				</Route>

			</Router>

			

			{#if $modalItem}
				<Modalitem />
			{/if}

		</div>
	</div>
</main>
