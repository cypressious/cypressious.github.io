export default [
  {
    path: "/blog/:slug/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "Y:\\Repos\\gridsome-website\\src\\templates\\Post.vue")
  },
  {
    path: "/blog/",
    component: () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "Y:\\Repos\\gridsome-website\\src\\pages\\Blog.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "Y:\\Repos\\gridsome-website\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "Y:\\Repos\\gridsome-website\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "Y:\\Repos\\gridsome-website\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

