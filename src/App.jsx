// App.jsx
import './App.css';
import Navbar from "./components/Navbar.jsx";
import ZooLogo from "./assets/zoo_logo.png";
import QrCode from "./components/QrCode.jsx";
import { useState, useEffect } from 'react';
import Test from "./page/Testpage.jsx"
import Impressum from "./components/Impressum.jsx";
import Datenschutzerklaerung from "./components/Datenschutzerklaerung.jsx";

function App() {
    const [activeComponent, setActiveComponent] = useState(""); // Neuer Zustand für die aktive Komponente

    useEffect(() => {
        // Initialisiert den Zustand basierend auf dem letzten Abschnitt der URL
        const path = window.location.pathname.split('/').pop();
        setActiveComponent(path); // Setzt den Zustand auf den letzten Teil der URL
    }, []); // Nur beim ersten Laden der Seite ausführen

    return (
        <>
            <main>
                <div className="grid grid-cols-3 gap-4 w-full mb-10">
                    <div>
                        <Navbar onPageChange={setActiveComponent} /> {/* Callback übergeben */}
                    </div>
                    <div></div>
                    <div className="place-self-end">
                        <img src={ZooLogo} className="w-24" alt="Zoo Logo" />
                    </div>
                </div>

                <div>
                    {activeComponent === "Qrcode" && <QrCode />}
                    {activeComponent === "Test" && <Test />}
                    {activeComponent === "Impressum" && <Impressum />}
                    {activeComponent === "Datenschutzerklaerung" && <Datenschutzerklaerung />}
                </div>
            </main>
        </>
    );
}

export default App;
