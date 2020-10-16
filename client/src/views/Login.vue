<template>
    <div>
        <form @submit="doUserLogin">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
    </div>
</template>

<script>
// import axios from 'axios';
    import { mapActions } from 'vuex';
    export default {
        data () {
            return {
                user: {
                    strategy: 'local',
                    email: '',
                    password: ''
                }
            }
        },
        
        methods: {
            ...mapActions({
                login: 'users/login'
            }),
            doUserLogin() {
                // try{
                //     axios.post('http://localhost:3030/authentication', this.user)
                //     .then(res => {
                //         console.log(res)
                //     })
                // } catch(err) {
                //     console.log(err)
                // }
                console.log(this.user)
                this.$store.dispatch('auth/authenticate', this.user)
                .then(res => {
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>
.btn {
    background: #00ff00;
    color: white;
    font-weight: bold;
}

</style>