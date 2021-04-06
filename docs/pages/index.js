
// 路由配置
const pages ={
    home: () => import( /* webpackChunkName: "pages/home" */ "./home/index.md"),
    workList: () => import( /* webpackChunkName: "pages/home" */ "./workList"),
    content: () => import( /* webpackChunkName: "pages/home" */ "./content"),
};
export default pages;