import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Gallerie() {

    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
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