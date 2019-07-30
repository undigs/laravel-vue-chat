import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//modules
import users from './modules/users';
import messages from './modules/messages';

export default new Vuex.Store({
    modules:{
        users,
        messages
    },
    strict: process.env.NODE_ENV != 'production'
})