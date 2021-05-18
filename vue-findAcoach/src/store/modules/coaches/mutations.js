export default {
    //sending the data to the action
    registerCoach(state,payload){
        state.coaches.push(payload)
    },

    setCoaches(state, payload){
        state.coaches = payload;
    }
}