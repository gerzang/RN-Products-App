import {FlatList, Image, Text, View} from 'react-native';
import FadeInImage from '../ui/FadeInImage';


interface Props {
    images: string[];
  }
const ProductImages = ({images}: Props) => {
    return (
        <>
        {images.length === 0 ? (
          <Image
            source={require('../../../assets/images/no-product-image.png')}
            style={{width: 300, height: 300}}
          />
        ) : (
          <FlatList
            data={images}
            keyExtractor={item => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <FadeInImage
                uri={item}
                style={{width: 300, height: 300, marginHorizontal: 7}}
              />
            )}
          />
        )}
      </>
    )
}

export default ProductImages;
