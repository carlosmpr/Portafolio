// Creating the routes for the applications
import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import CoachesList from './pages/coaches/CoachesList.vue';

import ContactCoach from './pages/request/ContactCoach.vue';
import RequestRecieved from './pages/request/RequestRecieved.vue';
import NotFound from './pages/NotFound.vue';


//we configure the routes creation with the creaRouter
const router = createRouter({
  //we define the browser history with the createWebHistory
  history: createWebHistory(),
  //defining the application routes in the routes array
  
  routes: [
    {
      path: '/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      component: CoachesList
    },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      //defining a nested route to contact specific couch

      // enabling props will pass :id as a props
      props:true,
      children: [
        {
          path: '/contact',
          component: ContactCoach
        }
      ]
    },
    {
      path: '/register',
      component: CoachRegistration
    },
    {
      path: '/requests',
      component: RequestRecieved
    },
    //defining a not found pages
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

export default router;
