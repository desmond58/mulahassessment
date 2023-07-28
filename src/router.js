import { createRouter, createWebHistory } from 'vue-router';
import Page1 from './components/HelloWorld.vue';
import RegistrationPage from './components/RegistrationPage.vue';
import OutputPage from './components/OutputPage.vue'; 

const routes = [
  { path: '/', component: Page1 },
  { path: '/RegistrationPage', component: RegistrationPage },
  { path: '/OutputPage', component: OutputPage}, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
