import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

export const Gallery = (props) => {
    const {title, photos, photosIndex, setIndex, containerWidth, largeScreen} = props

    return (
        <div>
            <h1>{title}</h1>
            <PhotoAlbum
                layout="rows"
                photos={photos}
                onClick={({ index }) => setIndex(index)}
                padding={largeScreen ? 60 : 0}
                spacing={largeScreen ? 40 : 25}
                targetRowHeight={largeScreen ? 100 : 250}
                containerWidth={largeScreen ? containerWidth : containerWidth/1.5}
                renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                    <a className="gallery-image" href={photo.href} style={wrapperStyle} target="_blank" rel="noreferrer noopener">
                        {renderDefaultPhoto({ wrapped: true })}
                    </a>
                )}
            />
            <Lightbox
                slides={photos}
                open={photosIndex >= 0}
                index={photosIndex}
                close={() => setIndex(-1)}
                controller={{closeOnBackdropClick: true}}
                plugins={[Fullscreen]}
            />
            <br></br><br></br>
        </div>
    )
}