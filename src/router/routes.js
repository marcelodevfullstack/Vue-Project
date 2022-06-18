import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import ControleDeProdutos from '@/views/ControleDeProdutos.vue';
import ControleDeClientes from '@/views/ControleDeClientes.vue';

// @ alias para a pasta src

const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      title: 'Dashboard'
      meta: { requiredAuth: false }
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        title: 'Login'
        meta: { requiredAuth: true }
      },
    {
        path: '/controle-de-produtos',
        name: 'ControleDeProdutos',
        component: ControleDeProdutos,
        title: 'Produtos'
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-clientes',
        name: 'ControleDeClientes',
        component: ControleDeClientes,
        title: 'Clientes'
        meta: { requiredAuth: true }
    }
   
];

export default routes;