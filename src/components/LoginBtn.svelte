
<script>
    import { auth } from "../firebase";
    import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

    import axios from "axios";

    import { navigate } from "svelte-routing";

    import { user, isLoggedIn, server } from "../stores";

    const login = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const resp = await signInWithPopup(auth, provider);
            //console.log(resp);

            $user = resp.user;
            $isLoggedIn = true;

            var user_temp = {
                nombre: resp.user["displayName"],
                mail: resp.user["email"],
                foto: resp.user["photoURL"],
                uid: resp.user["uid"],
            };

            navigate("/", { replace: true });
        } catch (error) {
            console.log(error);
        }

        axios({
            method: "POST",
            url: $server + "/user/",
            data: user_temp,
        }).then((resp) => {
            localStorage.setItem("uid", user_temp["uid"]);
            setTimeout(() => {
                location.reload();
            }, 1000);
        });
    };
</script>

<div class="btn-google" on:click={login}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="logo google">
    <p>Google</p>
</div>

<style>
    .btn-google{
        border: solid whitesmoke 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        padding: 15px;
    }

    img{
        width: 30px;
        height: 30px;
        border: none;
    }

    p{
        font-size: 20px;
        letter-spacing: 2px;
    }
</style>