<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>
                        username
                    </label>
                    <input class="form-control" type='text' v-model="user.username">
                </div>
                <div class="form-group">
                    <label>
                        mail
                    </label>
                    <input class="form-control" type='text' v-model="user.email">
                    <button class="btn btn-primary" @click='submit'>Submit</button>
                    <button class="btn btn-primary" @click='fetchData'>Get Data</button>
                    <ul class='list-group'>
                        <li class="list-group-item" v-for="u in users">
                            {{u.username}} - {{ u.email }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: []
            };
        },
        methods: {
            submit() {
                // sending the user object to fire base server
                this.$http.post('', this.user)
                    .then(response => {
                        // checking all okay
                        console.log(response);
                    }, error => {
                        // if an error
                        console.log(error);
                    });
            },
            fetchData() {
                // getting data from the fire base server
                this.$http.get('')
                    .then(response => {
                        // converts the body of the response into a js object
                        return response.json();

                    }) // gaining access to the data
                    .then(data => {
                        // getting details into array
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    });
            }
        }
    }

</script>

<style>

</style>