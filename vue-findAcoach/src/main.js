import { createApp } from 'vue';
import router from './router'
import App from './App.vue'
import store from './store';
import BaseCard from './components/Ui/BaseCard.vue'
import BaseButton from './components/Ui/BaseButton.vue'
import BaseBadge from './components/Ui/BaseBadge.vue'
const app = createApp(App);
//using vue-router in the app
app.use(router);
//connecting the store to the app
app.use(store)

//registring base components
app.component('base-card', BaseCard);
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.mount('#app')
