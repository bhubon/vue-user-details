<script setup>
import { ref, onBeforeMount, reactive, computed } from 'vue';

import MasterLayout from './MasterLayout.vue';

const loading = ref(true);
const user = ref({
    name: 'Bhubon Sutradhar',
    avatar: 'https://cdn.ostad.app/user/avatar/2023-05-22T09-59-24.957Z-me---light.jpg',
    birth: '06-22-2000',
    birthYear: 2000,
    age: 23,
    canVote: true,
    email: 'bhubonsd3@gmail.com',
    description: 'As a highly skilled web developer with expertise in PHP, WordPress, and Laravel.'
});




const birthYear = computed(() => {
    let currentYear = new Date().getFullYear();
    return currentYear - user.value.age;
});

const voteMessage = computed(() => {
    return user.value.age >= 18 ? 'Legal for Vote' : 'Not Legal for Vote';
});



</script>

<template>
    <MasterLayout>
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4 col-8 offset-2">
            <h1 class="h3 mb-0 text-gray-800">User Details</h1>
        </div>
        <div class="row">
            <div class="col-8 offset-2">
                <div class="card shadow mb-4">
                    <div class="user-details p-4">
                        <h4>Details</h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Name: </td>
                                    <td>{{ user.name }}</td>
                                </tr>
                                <tr>
                                    <td>Email: </td>
                                    <td>{{ user.email }}</td>
                                </tr>
                                <tr>
                                    <td>Date Of Birth: </td>
                                    <td>{{ user.birth }}</td>
                                </tr>
                                <tr>
                                    <td>Avatar: </td>
                                    <td><img :src="user.avatar" alt=""></td>
                                </tr>
                                <tr>
                                    <td>Description: </td>
                                    <td>{{ user.description }}</td>
                                </tr>
                                <tr>
                                    <td>Calculated Birth Year: </td>
                                    <td>{{ birthYear }}</td>
                                </tr>
                                <tr>
                                    <td>Can Vote: </td>
                                    <td>{{ voteMessage }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-body">
                        <h4>Edit Details</h4>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp"
                                    placeholder="Enter name" v-model="user.name">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" aria-describedby="emailHelp"
                                    placeholder="Enter email" v-model="user.email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Birt Date</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp"
                                    placeholder="Enter birth date" v-model="user.birth">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Avatar</label>
                                <input type="url" class="form-control" placeholder="Avatar URL" v-model="user.avatar">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Description</label>
                                <textarea class="form-control" placeholder="Description"
                                    v-model="user.description"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Age</label>
                                <input type="number" class="form-control" placeholder="Enter age" v-model="user.age">
                            </div>
                            <button type="button" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </MasterLayout>
</template>

<style scoped></style>