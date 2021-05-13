
//creating the store to control all the state
import {createStore} from 'vuex'
import coachesModule from './modules/coaches'
import requestModule from './modules/request'
const store = createStore({
//defining each modules thath containt states
modules: {
    coaches: coachesModule,
    requests: requestModule
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