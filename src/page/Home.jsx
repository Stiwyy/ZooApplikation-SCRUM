import ZooMap from "../assets/zoomap.jpg";

export default function Home() {
    return(
        <>
            <h1>Willkommen auf unserer Zooapplikation</h1>
            <p>Hier kannst du deine Erfahrungen in unserem Zoo verbessern, mit vielen nützlichen Features. Da ist für jeden was dabei!</p>
            <div className="flex justify-center items-center p-4">
                <img
                    src={ZooMap}
                    alt="Zoo Karte"
                    className="w-[90vw] h-[60vh] object-contain rounded-lg shadow-lg"
                />
            </div>
        </>
    )
}