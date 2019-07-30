const state = {
    myMessages:[],
    userMessages:[],
    message:'',
    target:{},
}

const mutations = {
    /**
     * When click to the selected user list.
     * The target/user you want to send message will be added to the state.target.
     * 
     * @param state 
     * @param user 
     * @return void
     */
    addTarget(state,user) {
        state.target = user;
    }
}

export default {
    namespaced: true,
    state,
    mutations
}