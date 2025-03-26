// App.jsx
import './App.css';
import Navbar from "./components/Navbar.jsx";
import ZooLogo from "./assets/zoo_logo.png";
import QrCode from "./components/QrCode.jsx";
import { useState } from 'react';
import Test from "./page/Testpage.jsx"

function App() {
    const [activeComponent, setActiveComponent] = useState("Test"); // Neuer Zustand für die aktive Komponente

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
                    {/* Dynamisch die Komponente basierend auf dem aktiven Zustand anzeigen */}
                    {activeComponent === "Qrcode" && <QrCode />}
                    {activeComponent === "Test" && <Test />}
                    {/* Du kannst hier weitere Komponenten hinzufügen, wie z.B. Test */}
                </div>
            </main>
        </>
    );
}

export default App;
