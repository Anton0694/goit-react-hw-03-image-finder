import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled'


export function ImageGalleryItem({images, onSelect}) {
    const { webformatURL, tags } = images
    return (
       
        <GalleryItem >
            <Image onClick={() => {onSelect(images)}} src={webformatURL} alt={ tags } />
        </GalleryItem>
    )
}
 

ImageGalleryItem.propTypes = {
  images: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};