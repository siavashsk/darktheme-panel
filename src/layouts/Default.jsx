import { Footer, Header, Sidebar } from "../components";
import React from "react";
import AppRoutes from "../routes";

const DefaultLayout = (props) => {
    return (
        <div
            id="main-wrapper"
            data-layout="vertical"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
            data-boxed-layout="full">
            <Header />
            <Sidebar {...props} routes={AppRoutes} />
            <div className="page-wrapper d-block">
                <div className="page-content container-fluid"></div>
                <Footer />
            </div>
        </div>
    );
};

export default DefaultLayout;
