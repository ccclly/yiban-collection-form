import * as VueRouter from 'vue-router';
import FormResult from '@/components/FormResult';
import CollectionForm from '@/components/CollectionForm';

const routes = [
  { path: '/', component: CollectionForm },
  { path: '/result', component: FormResult },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router;
