import './App.css';
import Navbar from "./components/Navbar.jsx";
import ZooLogo from "./assets/zoo_logo.png";
import QrCode from "./components/QrCode.jsx";
import {useState, useEffect} from 'react';
import Test from "./page/Testpage.jsx";
import Home from "./page/Home.jsx";
import Impressum from "./components/Impressum.jsx";
import Datenschutzerklaerung from "./components/Datenschutzerklaerung.jsx";
import Attraktionen from "./components/Attraktionen.jsx"
import Map from "./components/Map.jsx";
import User from "./components/User.jsx"
import ZooMap from "./assets/zoomap.jpg"


function App() {
    const [activeComponent, setActiveComponent] = useState("Home");

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

    return (<div className="relative h-full">
        <div className="grid grid-cols-3 gap-4 w-full mb-10">
            <div className="place-self-end">
                <img src={ZooLogo} className="w-24" alt="Zoo Logo"/>
            </div>
        </div>


        <div>
            {activeComponent === "Qrcode" && <QrCode/>}
            {activeComponent === "Home" && <Home/>}
            {activeComponent === "Impressum" && <Impressum/>}
            {activeComponent === "Datenschutzerklaerung" && <Datenschutzerklaerung/>}
            {activeComponent === "Attraktionen" && <Attraktionen/>}
            {activeComponent === "Map" && <Map/>}
            {activeComponent === "User" && <User />}
            <Navbar onPageChange={setActiveComponent}/>
        </div>


        {!(activeComponent === "Datenschutzerklaerung" || activeComponent === "Impressum" || activeComponent === "Qrcode" || activeComponent === "Attraktionen") && (
            <div className="flex flex-col items-center gap-4 absolute bottom-0 left-0">
                <button className="w-48 rounded-xl bg-blue-500 text-white p-2 shadow">Attraktionen</button>
                <button className="w-48 rounded-xl bg-gray-500 text-white p-2 shadow">Kind suchen</button>
            </div>)}

    </div>);
}

export default App;
