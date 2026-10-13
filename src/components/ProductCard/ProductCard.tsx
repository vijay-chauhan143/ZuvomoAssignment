import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

import type { Product } from '../../services/actions/productActions';
import type { ThemeColors } from '../../theme/colors';
import { styles } from './ProductCard.styles';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

type ProductCardProps = {
  product: Product;
  colors: ThemeColors;
  onPress: () => void;
};

export function ProductCard({ product, colors, onPress }: ProductCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${product.title}, ${currencyFormatter.format(product.price)}`}
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: colors.surface, borderColor: colors.border, opacity: pressed ? 0.78 : 1 },
      ]}
    >
      <View style={[styles.imageFrame, { backgroundColor: colors.background }]}>
        <Image
          accessibilityLabel={product.title}
          contentFit="contain"
          source={{ uri: product.thumbnail }}
          style={styles.thumbnail}
          transition={160}
        />
      </View>
      <View style={styles.content}>
        <Text numberOfLines={2} style={[styles.title, { color: colors.text }]}>
          {product.title}
        </Text>
        <Text numberOfLines={1} style={[styles.category, { color: colors.mutedText }]}>
          {product.category}
        </Text>
        <View style={styles.meta}>
          <Text style={[styles.price, { color: colors.text }]}>
            {currencyFormatter.format(product.price)}
          </Text>
          {Number.isFinite(product.rating) && (
            <Text style={[styles.rating, { color: colors.mutedText }]}>
              Rating {product.rating.toFixed(1)}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
}