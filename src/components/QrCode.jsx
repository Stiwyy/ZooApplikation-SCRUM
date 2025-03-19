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
        };

        html5QrcodeScanner.render(onScanSuccess);

        // Rückgabe-Funktion um den Scanner zu stoppen, wenn die Komponente unmountet
        return () => {
            html5QrcodeScanner.clear();
        };

    }, []); // Leere Abhängigkeitsliste, sorgt dafür, dass der Effekt nur einmal ausgeführt wird

    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="qrdiv" id="reader"></div>
                <p className="mt-4 text-center">Scan Qr-Code</p>
            </div>
        </>
    );
}

export default QrCode;
