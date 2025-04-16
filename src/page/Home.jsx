import ZooMap from "../assets/zoomap.jpg";
import AttraktionenMap from "../assets/attraktionen.jpg";
import Kind from "../assets/kind.png";

export default function Home({ showAttraktionen, showChildFinder }) {
    let mapToShow = ZooMap;

    if (showChildFinder) {
        mapToShow = Kind;
    } else if (showAttraktionen) {
        mapToShow = AttraktionenMap;
    }

    return (
        <>
            <h1>Willkommen auf unserer Zooapplikation</h1>
            <p>
                Hier kannst du deine Erfahrungen in unserem Zoo verbessern, mit vielen nützlichen Features. Da ist für jeden was dabei!
            </p>
            <div className="flex justify-center items-center p-4">
                <img
                    src={mapToShow}
                    alt="Karte"
                    className="w-[90vw] h-[60vh] object-contain rounded-lg shadow-lg"
                />
            </div>
        </>
    );
}
