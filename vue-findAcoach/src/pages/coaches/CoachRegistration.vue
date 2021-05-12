<template>
<section>
    <base-card>
    <h2>Register as coach</h2>
    <!-- Listening for save-data emit and executing the saveData methods-->
    <coach-form @save-data="saveData"></coach-form>
    </base-card>
</section>
</template>
<script>
import CoachForm from '../../components/coaches/CoachForm.vue'
export default {
    components:{
        CoachForm
    },
    methods:{
        saveData(data){
            //dispatching the data to the mutation
            this.$store.dispatch('coaches/registerCoach', data)
            //redirecting the website to coaches site
            this.$router.replace('/coaches')
        }
    },
   
}
</script>