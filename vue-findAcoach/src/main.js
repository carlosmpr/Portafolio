import { createApp } from 'vue';
import router from './router'
import App from './App.vue'
import store from './store';
import BaseCard from './components/Ui/BaseCard.vue'
import BaseButton from './components/Ui/BaseButton.vue'
import BaseBadge from './components/Ui/BaseBadge.vue'
import BaseSpinner from './components/Ui/BaseSpinner.vue'
import BaseDialog from './components/Ui/BaseDialog.vue'
const app = createApp(App);
//using vue-router in the app
app.use(router);
//connecting the store to the app
app.use(store)

//registring base components
app.component('base-card', BaseCard);
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-spinner', BaseSpinner)
app.component('base-dialog', BaseDialog)
app.mount('#app')
