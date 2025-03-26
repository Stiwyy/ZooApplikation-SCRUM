import './App.css';
import Navbar from "./components/Navbar.jsx";
import ZooLogo from "./assets/zoo_logo.png";
import QrCode from "./components/QrCode.jsx";
import { useState } from 'react';
import Test from "./page/Testpage.jsx"
import Home from "./page/Home.jsx";

function App() {
    const [activeComponent, setActiveComponent] = useState("Home");

    return (
        <>
            <main>
                <div className="grid grid-cols-3 gap-4 w-full mb-10">
                    <div>
                        <Navbar onPageChange={setActiveComponent} />
                    </div>
                    <div></div>
                    <div className="place-self-end">
                        <img src={ZooLogo} className="w-24" alt="Zoo Logo" />
                    </div>
                </div>

                <div>
                    {activeComponent === "Qrcode" && <QrCode />}
                    {activeComponent === "Test" && <Test />}
                    {activeComponent === "Home" && <Home/>}
                </div>
            </main>
        </>
    );
}

export default App;
