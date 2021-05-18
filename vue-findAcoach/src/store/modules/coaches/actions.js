
export default {
    
    async registerCoach(context, data){
        const userId = context.rootGetters.userId
        const coachData ={
         
            firstName: data.first,
            lastName: data.last,
            description:data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        }

        //dispatching the action to mutate the state
      const response = await fetch(`https://vue-test-6f6a0-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        // const resnponseData = await response.json()

        if(!response.ok){
            
            return;
        }

        context.commit('registerCoach',{
            ...coachData,
            id: userId
        })
       
    },

   async loadCoaches(context){
        const  response = await fetch(`https://vue-test-6f6a0-default-rtdb.firebaseio.com/coaches.json`);
        const resnponseData = await response.json()
        
        if(!response){
            console.log(response)
           const error = new Error(resnponseData.message || 'Failed ti fetch!');
           throw error;
        }

        const coaches = [];

        for (const key in resnponseData){
            const coach = {
                id: key,
                firstName: resnponseData[key].firstName,
                lastName: resnponseData[key].lastName,
                description:resnponseData[key].description,
                hourlyRate: resnponseData[key].hourlyRate,
                areas: resnponseData[key].areas
            }
            coaches.push(coach)
        }

        context.commit('setCoaches', coaches);
    }
    
}