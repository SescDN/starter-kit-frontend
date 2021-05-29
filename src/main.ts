import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import "reflect-metadata";

import Login from './views/Login.vue'
import NavBarVertical from './views/NavBarVertical.vue'
import TabsVerticais from './views/TabsVerticais.vue'
import TabsHorizontais from './views/TabsHorizontais.vue'
import Tabela from './views/Tabela.vue'
import TabelaCompleta from './views/TabelaCompleta.vue'
import Dialogos from './views/Dialogos.vue'
import Cadastro from './views/Cadastro.vue'
import Alunos from './views/Alunos.vue'
 
Vue.config.productionTip = false

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes: [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/tabshorizontais',
    component: TabsHorizontais,
  },
  {
    path: '/tabsverticais',
    component: TabsVerticais,
  },
  {
    path: '/dialogos',
    component: Dialogos,
  },
  {
    path: '/tabela',
    component: Tabela,
  },
  {
    path: '/tabelacompleta',
    component: TabelaCompleta,
  },
  {
    path: '/cadastro',
    component: Cadastro,
  },
  {
    path: '/navbarvertical',
    component: NavBarVertical,
  },
  {
    path: '/alunos',
    component: Alunos,
  }
],
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
