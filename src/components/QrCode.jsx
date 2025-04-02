import "./QrCode.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

function QrCode() {

    useEffect(() => {
        // Funktion wird nur einmal beim ersten Rendern aufgerufen
        const html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

        const onScanSuccess = (decodedText, decodedResult) => {
            // Handle success condition
            console.log(`Scan result: ${decodedText}`, decodedResult);
            if (decodedResult.decodedText === "elephant"){
                window.location.replace("https://de.wikipedia.org/wiki/Elefanten");
            }
        };

        html5QrcodeScanner.render(onScanSuccess);

        // Rückgabe-Funktion um den Scanner zu stoppen, wenn die Komponente unmountet
        return () => {
            html5QrcodeScanner.clear();
        };

    }, []); // Leere Abhängigkeitsliste, sorgt dafür, dass der Effekt nur einmal ausgeführt wird

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="qrdiv" id="reader"></div>
            </div>
        </>
    );
}

export default QrCode;
