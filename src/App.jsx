import './App.css';
import Navbar from "./components/Navbar.jsx";
import ZooLogo from "./assets/zoo_logo.png";
import QrCode from "./components/QrCode.jsx";
import { useState } from 'react';
import Test from "./page/Testpage.jsx"
import Home from "./page/Home.jsx";

function App() {
    const [activeComponent, setActiveComponent] = useState("Home");

    const handleClick = () =>{

    }

    return (
        <div className="relative h-full">
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

                <div className="flex flex-col items-center gap-4 absolute bottom-0 left-0">
                <button className="w-48 rounded-xl">Attraktionen</button>
                <button className="w-48 rounded-xl">Kind suchen</button>
                </div>
        </div>
    );
}

export default App;
