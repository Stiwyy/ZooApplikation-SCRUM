import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import ZooLogo from "./assets/zoo_logo.png";
import QrCode from "./components/QrCode.jsx";
import Home from "./page/Home.jsx";
import Impressum from "./components/Impressum.jsx";
import Datenschutzerklaerung from "./components/Datenschutzerklaerung.jsx";
import Attraktionen from "./components/Attraktionen.jsx";
import Map from "./components/Map.jsx";
import Switch from '@mui/material/Switch';

function App() {
    const [activeComponent, setActiveComponent] = useState("Home");
    const [showAttraktionen, setShowAttraktionen] = useState(false);
    const [showChildFinder, setShowChildFinder] = useState(false);

    useEffect(() => {
        document.title = "Zoo Zürich";
        const link = document.querySelector("link[rel~='icon']");
        if (link) {
            link.setAttribute("href", ZooLogo);
        } else {
            const newLink = document.createElement("link");
            newLink.rel = "icon";
            newLink.href = ZooLogo;
            document.head.appendChild(newLink);
        }
    }, []);

    useEffect(() => {
        const path = window.location.pathname.split('/').pop();
        if (path) {
            setActiveComponent(path);
        }
    }, []);

    return (
        <div className="relative h-full">
            <Navbar onPageChange={setActiveComponent} />

            <div className="flex justify-end pr-4">
                <img src={ZooLogo} className="w-24" alt="Zoo Logo" />
            </div>

            {activeComponent === "Qrcode" && <QrCode />}
            {activeComponent === "Home" && (
                <Home
                    showAttraktionen={showAttraktionen}
                    showChildFinder={showChildFinder}
                />
            )}
            {activeComponent === "Impressum" && <Impressum />}
            {activeComponent === "Datenschutzerklaerung" && <Datenschutzerklaerung />}
            {activeComponent === "Attraktionen" && <Attraktionen />}
            {activeComponent === "Map" && <Map />}
            {activeComponent === "User" && <User />}

            {!(["Datenschutzerklaerung", "Impressum", "Qrcode", "Attraktionen"].includes(activeComponent)) && (
                <div className="flex flex-col items-center gap-4 absolute bottom-0 left-0 p-4 bg-white/80 rounded-tr-xl shadow-md">
                    <div className="flex items-center">
                        <span className="mr-2">Zoo Karte</span>
                        <Switch
                            checked={showAttraktionen}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    // Wenn Attraktionen aktiviert werden, deaktiviere Kind suchen
                                    setShowAttraktionen(true);
                                    setShowChildFinder(false);
                                } else {
                                    // Schalte Attraktionen aus
                                    setShowAttraktionen(false);
                                }
                            }}
                        />
                        <span className="ml-2">Attraktionen</span>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">Standard</span>
                        <Switch
                            checked={showChildFinder}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setShowChildFinder(true);
                                    setShowAttraktionen(false);
                                } else {
                                    setShowChildFinder(false);
                                }
                            }}
                            color="secondary"
                        />
                        <span className="ml-2">Kind suchen</span>
                    </div>
                </div>

            )}
        </div>
    );
}

export default App;
