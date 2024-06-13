

import { Image } from 'react-native';
import { Product } from '../../../domain/entities/products';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/StackNavigation';
import { Card, Text } from '@ui-kitten/components';
import FadeInImage from '../ui/FadeInImage';


interface Props {
    product: Product;
}


const ProductCard = ({ product }: Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    

    return (
        <Card
            style={{ flex: 1, backgroundColor: '#F9F9F9', margin: 3 }}
            onPress={() => navigation.navigate('ProductScreen', { productId: product.id })}
        >

            {
                (product.images.length === 0)
                    ? (
                        <Image
                            source={require('../../../assets/images/no-product-image.png')}
                            style={{ width: '100%', height: 200 }}
                        />)
                    : (
                        <FadeInImage
                            uri={product.images[0]}
                            style={{ flex: 1, height: 200, width: '100%' }}
                        />

                    )
            }

            <Text
                numberOfLines={2}
                style={{ textAlign: 'center', color: 'black' }}
            >{product.title}</Text>

        </Card>
    )
}

export default ProductCard;
