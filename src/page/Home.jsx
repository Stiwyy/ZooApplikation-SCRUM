export default function Home() {
    const cards = [
        {
            name: 'Christmann P.',
            rating: 5,
            review: 'Sympathisch und Freundliche Herr J.Zog Empfehlung 100% ..',
        },
        {
            name: 'Pascal H.',
            rating: 5,
            review: 'Alles Bestens mega nett.',
        },
        {
            name: 'Roland K.',
            rating: 5,
            review: 'Gutes Preis-Leistungs-Verhätnis',
        },
        {
            name: 'Roman H.',
            rating: 5,
            review: 'Sehr freundlich, hilfsbereit und effizient',
        },
    ]
    return(
        <>
            <h1>Willkommen auf unserer Zooapplikation</h1>
            <p>Hier kannst du deine Erfahrungen in unserem Zoo verbessern, mit vielen nützlichen Features. Da ist für jeden was dabei!</p><br/>
            <h2 className="text-4xl">Das sagen Nutzer</h2>

            <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white dark:bg-slate-800 h-48 p-5 m-4">
        <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{cards[0].name}</div>
      <div className="px py-4 w-full">

        <div className="flex items-center mt-2 mb-4">
          {Array(5).fill(0).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 mr-1 ${i < cards[0].rating ? "text-yellow-300" : "text-gray-300"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            {cards[0].rating} von 5
          </p>
        </div>

        <p className="text-gray-700 text-base dark:text-slate-300">
          "{cards[0].review}"
        </p>
      </div>
    </div>
        </>
    )
}