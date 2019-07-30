const state = {
    all:[]
}

const mutations = {
    /**
     * Mutate state
     * 
     * @param state
     * @param users
     */
    index(state, users) {
        state.all = users;
    }
}

const actions = {
    /**
     * Fetch users from api and commit to mutations
     * 
     * @param commit
     * @return void
     */
    async index({commit}) {
        await axios.get('/api/users')
            .then(res => commit('index',res.data))
            .catch(err => console.log(err.response));
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}