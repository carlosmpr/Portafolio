
//creating the store to control all the state
import {createStore} from 'vuex'
import coachesModule from './modules/coaches'

const store = createStore({
//defining each modules thath containt states
modules: {
    coaches: coachesModule
},
state(){
    return{
        userId:'c3'
    };
},
getters:{
    userId(state){
        return state.userId;
    }
}
})

export default store;