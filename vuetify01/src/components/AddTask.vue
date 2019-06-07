<template>
    <v-component>
        <v-layout>
            <h2>Add New Task</h2>

        </v-layout>
        <v-layou>
            <form action="">
                <label for="title">task title</label>
                <input type="text" name="title" v-model="title">
            </form>
        </v-layou>

    </v-component>
</template>


<script>
export default {
    name: 'AddTask',
    data(){
        return{

        }
    }
}
</script>




