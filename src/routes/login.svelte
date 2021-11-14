<script>
    import {authStore} from '../stores/auth';
</script>

<h1>
    Log in
</h1>
<form action="/api/login" method="post">
    <label>username <input type="text" name="user" bind:value={$authStore.user}></label><br>
    <label>password <input type="password" name="password" bind:value={$authStore.password}></label><br>
    <input type="submit" value="submit">
    <input type="reset" value="cancel"><br>
    Or you may want to <button>Sign in</button> ?
</form>