import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button/Button';
import { ProductSkeleton } from '../../components/ProductSkeleton/ProductSkeleton';

import { useDispatch, useSelector } from 'react-redux';
import type { RootStackParamList } from '../../navigation/types/navigation';
import { fetchProductById } from '../../services/actions/productActions';
import type { AppDispatch, RootState } from '../../store/store';
import { getTheme } from '../../theme/theme';
import { styles } from './DetailsScreen.styles';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function DetailsScreen({ route }: DetailsScreenProps) {
  const dispatch = useDispatch<AppDispatch>();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const theme = getTheme(mode);
  const { productId } = route.params;
  const { selectedProduct, detailsLoading, detailsError } = useSelector((state: RootState) => state.products);
  const product = selectedProduct?.id === productId ? selectedProduct : null;
  const loading = detailsLoading || (product === null && detailsError === null);

  useEffect(() => {
    const request = dispatch(fetchProductById(productId));
    return () => request.abort();
  }, [dispatch, productId]);

  const retryProduct = () => {
    void dispatch(fetchProductById(productId));
  };

  const contentStyle = [styles.content, { backgroundColor: theme.colors.background }];

  if (loading) {
    return (
      <SafeAreaView edges={['left', 'right', 'bottom']} style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <ScrollView contentContainerStyle={contentStyle}>
          <ProductSkeleton colors={theme.colors} variant="details" />
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (detailsError || !product) {
    return (
      <SafeAreaView edges={['left', 'right', 'bottom']} style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <ScrollView contentContainerStyle={[contentStyle, styles.errorState]}>
          <Text style={[styles.errorTitle, { color: theme.colors.text }]}>Product couldn’t load</Text>
          <Text style={[styles.description, { color: theme.colors.mutedText }]}>
            {detailsError ?? 'This product is unavailable.'}
          </Text>
          <Button
            title="Retry"
            onPress={retryProduct}
            backgroundColor={theme.colors.primary}
            textColor={theme.colors.background}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  const images = product.images.length > 0 ? product.images : [product.thumbnail];

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={contentStyle}>
        <View style={[styles.heroFrame, { backgroundColor: theme.colors.surface }]}>
          <Image
            accessibilityLabel={product.title}
            contentFit="contain"
            source={{ uri: images[0] }}
            style={styles.heroImage}
            transition={180}
          />
        </View>
        {images.length > 1 && (
          <View style={styles.gallery}>
            {images.slice(1).map((image, index) => (
              <View key={`${image}-${index}`} style={[styles.galleryFrame, { backgroundColor: theme.colors.surface }]}>
                <Image contentFit="contain" source={{ uri: image }} style={styles.galleryImage} />
              </View>
            ))}
          </View>
        )}
        <Text style={[styles.title, { color: theme.colors.text }]}>{product.title}</Text>
        <Text style={[styles.rating, { color: theme.colors.mutedText }]}>Rating {product.rating.toFixed(1)}</Text>
        <Text style={[styles.price, { color: theme.colors.text }]}>
          {currencyFormatter.format(product.price)}
        </Text>
        <Text style={[styles.category, { color: theme.colors.primary }]}>
          {product.category}
        </Text>
        <Text style={[styles.description, { color: theme.colors.text }]}>{product.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}