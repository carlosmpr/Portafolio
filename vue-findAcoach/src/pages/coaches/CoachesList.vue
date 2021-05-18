<template>
  <div>
    <base-dialog :show="!!error" title="error ocurred">
    <p> {{error}}</p>
    </base-dialog>
    <coach-filter @change-filters="setFilters"/>
    <base-card>
    <div class="controls">
      <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
      <base-button link to="/register" v-if="!isCoach">Register as Coach</base-button>
    </div>
    <div v-if="isLoading">
      <base-spinner />
    </div>
    <ul v-if="hasCoaches">
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :lastName="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      ></coach-item>
    </ul>
    <h3 v-else>No coaches Found</h3>
    </base-card>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/Ui/BaseButton.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue'
import BaseDialog from '../../components/Ui/BaseDialog.vue';
export default {
    created(){
      this.loadCoaches();
    },
    data(){
        return{
          isLoading: false,
          erro:null,
        activeFilters:{
            frontend:true,
            backend:true,
            career:true
        }
        }
    },
  components: { CoachItem, BaseButton ,CoachFilter, BaseDialog},
  computed: {
       
        isCoach(){
            return this.$store.getters['coaches/isCoach']
        },
    
    filteredCoaches() {
      //accessing the state $store getters using namespace
    const coaches = this.$store.getters['coaches/coaches'];

    return coaches.filter( coach => {
        if(this.activeFilters.frontend && coach.areas.includes('frontend')){
            
            return true

        }

         if(this.activeFilters.backend && coach.areas.includes('backend')){
              
            return true

        }

         if(this.activeFilters.career && coach.areas.includes('career')){
            
            return true

        }

        return false
    })
    },

    hasCoaches() {
      //accessing the state $store getters using namespace
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    }
  },
  methods:{
      setFilters(updatedFilters){
          
            this.activeFilters = updatedFilters;
            console.log(this.activeFilters)
            
      },
      async loadCoaches(){
        this.isLoading = true;
        try {
          await this.$store.dispatch('coaches/loadCoaches');
        } catch (error) {
          console.log(error)
          this.error = error.message || 'Something went wrong';
        }
        
        this.isLoading = false;

      }
  }
};
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>