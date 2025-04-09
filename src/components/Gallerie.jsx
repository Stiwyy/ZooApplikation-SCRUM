import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Bild1 from "../assets/Tier1.jpg";
import Bild2 from "../assets/Tier2.jpg";
import Bild3 from "../assets/Tier3.jpg";
import Bild4 from "../assets/Tier4.jpg";
import Bild5 from "../assets/Tier5.jpg";
import Bild6 from "../assets/Tier6.jpg";

function Gallerie() {

    const images = [
        {
          original: Bild1,
          thumbnail: Bild1,
        },
        {
          original: Bild2,
          thumbnail: Bild2,
        },
        {
          original: Bild3,
          thumbnail: Bild3,
        },
        {
          original: Bild4,
          thumbnail: Bild4,
        },
        {
          original: Bild5,
          thumbnail: Bild5,
        },
        {
          original: Bild6,
          thumbnail: Bild6,
        }
      ];

    return (
        <div>
            <h1>Gallerie</h1>
            <div className=" mx-auto w-1/2">
                <ImageGallery items={images} showPlayButton={false} showFullscreenButton={true} className="w-full" />
            </div>
        </div>

    );

}

export default Gallerie;