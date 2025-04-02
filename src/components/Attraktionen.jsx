import React from 'react';

const attractions = [
    {
        name: 'Masoala Regenwald',
        description: 'Ein Stück madagassischer Regenwald mit über 50 verschiedenen Wirbeltierarten und zahlreichen Pflanzenarten.',
        imageUrl: 'https://zoo-live.rokka.io/image_slider_md_1x/10e8a8356a7a3c385b308df6a251e970f37601b3/m-nz9-1167-bearbeitet.jpg?itok=PcJZZD7c',
    },
    {
        name: 'Kaeng Krachan Elefantenpark',
        description: 'Eine weitläufige Anlage für Asiatische Elefanten, die ihrem natürlichen Lebensraum nachempfunden ist.',
        imageUrl: 'https://zoo-live.rokka.io/text_width_50_landscape_md_1x/66a4e1002b74d1cd71493ae16ceb6c7b4e196fbb/0014359.jpg?h=8f9c3751&itok=WE897b-N',
    },
    {
        name: 'Lewa-Savanne',
        description: 'Eine Nachbildung der afrikanischen Savanne mit Giraffen, Nashörnern, Zebras und weiteren Tierarten.',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zoo.ch%2Fde%2Fzoonews%2Fwillkommen-lewa&psig=AOvVaw0HiaCs8x-VFnRwq81aBYru&ust=1743660280155000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjKg_LWuIwDFQAAAAAdAAAAABAE',
    },
    {
        name: 'Australienanlage',
        description: 'Beheimatet Koalas, Wallabys, Emus und andere australische Tierarten.',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zoo.ch%2Fde%2Fzoobesuch%2Flebensraeume%2Faustralien&psig=AOvVaw1PXj6FGoOFDQ9wuc3xW65y&ust=1743660312680000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOi2pP7WuIwDFQAAAAAdAAAAABAE',
    },
    {
        name: 'Mongolische Steppe',
        description: 'Eine Darstellung der mongolischen Graslandschaft mit Kamelen, Yaks und Kaschmirziegen.',
        imageUrl: 'https://www.zoo.ch/de/zoobesuch/lebensraeume/mongolische-steppe',
    },
    {
        name: 'Exotarium',
        description: 'Beherbergt zahlreiche Terrarien und Aquarien mit Fischen, Amphibien und Reptilien aus verschiedenen Regionen.',
        imageUrl: 'https://www.neuco.ch/de/inspirationen/oeffentliche-gebaeude/exotarium-zoo-zuerich/',
    },
];

const ZooAttractions = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Attraktionen im Zoo Zürich</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {attractions.map((attraction, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                            src={attraction.imageUrl}
                            alt={attraction.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                            <p className="text-gray-600 text-sm">{attraction.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ZooAttractions;
