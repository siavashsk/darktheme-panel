import React from "react";
import { Toggle } from "./toggle";
import { useTheme } from "../../contexts/theme.jsx";
import logo from "../../assets/images/logo.svg";
import profilePicture from "../../assets/images/profile.jpg";

const Header = () => {
    const showMobileMenu = () => {
        document
            .getElementById("main-wrapper")
            .classList.toggle("show-sidebar");
    };

    const { theme, toggleThemeMode } = useTheme();

    const handleCheck = (e) => {
        toggleThemeMode(e.target.checked);
    };
    console.log(theme);
    return (
        <header className="topbar navbarbg" data-navbarbg="skin6">
            <nav className={`navbar navbar-${theme.mode.toLowerCase()} h-100`}>
                <div className="navbar-header" id="logobg" data-logobg="skin6">
                    <a className="navbar-brand" href="/">
                        <b className="logo-icon">
                            <img
                                src={logo}
                                alt="homepage"
                                className="dark-logo"
                            />
                        </b>
                    </a>
                    <button
                        className="btn-link nav-toggler d-block d-md-none"
                        onClick={() => showMobileMenu()}>
                        <i className="ti-menu ti-close" />
                    </button>
                </div>
                {/* toggle goes here */}
                <Toggle
                    checked={theme.mode === "DARK"}
                    onChange={handleCheck}
                    label={theme.mode === "DARK" ? "تاریک" : "روشن"}
                />
                <div className="collapse navbarbg show">
                    <div className="dropdown">
                        <img
                            src={profilePicture}
                            alt="user"
                            className="rounded-circle"
                            width="31"
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
