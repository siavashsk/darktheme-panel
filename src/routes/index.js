import DefaultLayout from "../layouts/Default";

const indexRoutes = [{ path: "/", component: DefaultLayout }];

const AppRoutes = [
    {
        path: "/dashboard",
        name: "داشبورد",
        icon: "fa fa-tachometer-alt",
        component: () => null,
        private: true,
        showInNav: true,
    },
    {
        path: "/all-products",
        name: "همه محصولات",
        icon: "fa fa-list",
        component: () => null,
        private: true,
        showInNav: true,
    },
    {
        path: "/add-product",
        name: "افزودن محصول",
        icon: "fa fa-plus",
        component: () => null,
        private: true,
        showInNav: true,
    },
    {
        path: "/products/edit/:id",
        name: "ویرایش محصولات",
        component: () => null,
        showInNav: false,
    },
    {
        path: "/login",
        name: "ورود",
        icon: "fa fa-plus",
        component: () => null,
        showInNav: false,
    },
    {
        path: "/contact-us",
        name: "ارتباط با ما",
        icon: "fa fa-phone",
        component: () => null,
    },
    { path: "/", pathTo: "/dashboard", name: "Dashboard", redirect: true },
];

export default AppRoutes;

export { indexRoutes };
