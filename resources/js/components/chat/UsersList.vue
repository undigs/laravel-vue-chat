<template>
    <div class="inbox_chat">
        <div class="chat_list active_chat" v-for="user in users" :key="user.id" @click="addTarget(user)">
            <div class="chat_people">
                <div class="chat_ib">
                    <h5>{{user.name}}</h5>
                    <p>Tes message</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    methods: {
        addTarget(user) {
            this.$store.commit('messages/addTarget',user);
        }
    },
    mounted() {
        this.$store.dispatch('users/index');
    },
    computed: {
        ...mapState({
            users: state => state.users.all
        })
    }
}
</script>