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
        imageUrl: 'https://zoo-live.rokka.io/text_width_50_landscape_md_2x/79d9ab68bd85386daf3b49e23b09e97a977bdca9/2244-21958.jpg?h=8e29e890&itok=Xuu1XCSL',
    },
    {
        name: 'Australienanlage',
        description: 'Beheimatet Koalas, Wallabys, Emus und andere australische Tierarten.',
        imageUrl: 'https://zoo-live.rokka.io/header_half_lg_2x/079dc3a5bda310c203bdc90b05d9dd934de336d8/2244-0019120-0.jpg?itok=94nB_pwt',
    },
    {
        name: 'Mongolische Steppe',
        description: 'Eine Darstellung der mongolischen Graslandschaft mit Kamelen, Yaks und Kaschmirziegen.',
        imageUrl: 'https://zoo-live.rokka.io/header_half_lg_2x/12bdcad99cb116cdf0ff5f30966d2e9ffee64199/2244-0015797-0.jpg?itok=wHJ0D-VA',
    },
    {
        name: 'Exotarium',
        description: 'Beherbergt zahlreiche Terrarien und Aquarien mit Fischen, Amphibien und Reptilien aus verschiedenen Regionen.',
        imageUrl: 'https://zoo-live.rokka.io/header_half_lg_2x/a0990f342480ebedcf46c690d76c3d1a0629bd9f/20160928-160927-514-aquarium-2244-0.jpg?itok=7Kt_zX-Y',
    },
];

const ZooAttractions = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-black">Attraktionen im Zoo Zürich</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {attractions.map((attraction, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                            src={attraction.imageUrl}
                            alt={attraction.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">{attraction.name}</h3>
                            <p className="text-gray-600 text-sm">{attraction.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ZooAttractions;
