
const Foo = () => import('@/Foo.vue')
const Bar = () => import('@/Bar.vue')

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
  
  module.exports = routes