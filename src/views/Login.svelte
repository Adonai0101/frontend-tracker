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

<div class="cont-login">
    <div class="login-google" on:click={login}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt=""
        />
        <p>Google</p>
    </div>
</div>

<style>
    .cont-login {
        margin: 0;
        padding: 0;
        height: calc(100vh - 80px);
        width: 100vw;
        box-sizing: border-box;
        
        border: solid red 1px;

        display: flex;
        justify-content: center;
    }
    .login-google {
        width: 80%;
        height: 100px;
        border: solid 2px lightslategray;
        margin: 20%;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .login-google img {
        width: 50px;
        height: 50px;
    }

    .login-google p {
        font-size: 55px;
        letter-spacing: 1px;
        color: lightslategrey;
    }
</style>
