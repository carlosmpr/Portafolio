// the index will combine all the files necesary for the vuex state
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
export default{

    //using namespace to identify the state
    namespaced:true,
    state(){
        return {
            coaches:[
                {
                  id: 'c1',
                  firstName: 'Maximilian',
                  lastName: 'SchwarzmÃ¼ller',
                  areas: ['frontend', 'backend', 'career'],
                  description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                },
                {
                  id: 'c2',
                  firstName: 'Julie',
                  lastName: 'Jones',
                  areas: ['frontend', 'career'],
                  description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 30
                }
              ]
        }
    },
// adding mutations to avoid mutate the state from outside the store
    mutations,
    actions,
    //defining the getters to get the state value with out altering the state
    getters

}