import PropTypes from 'prop-types';
import { Gallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'


export function ImageGallery({ images, onSelect }) {
    return (
        
        <Gallery >
            {images.map(item => <ImageGalleryItem onSelect={onSelect} key={item.id} images={item} />)}
        </Gallery>
        
       
    )
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  })).isRequired,
  onSelect: PropTypes.func,
};