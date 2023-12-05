const { createWebHistory, createRouter } =VueRouter

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: () => import('../components/home-page.js')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router