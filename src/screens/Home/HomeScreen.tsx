import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useEffect } from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  View,
  type ListRenderItemInfo,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../components/Button/Button';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductSkeleton } from '../../components/ProductSkeleton/ProductSkeleton';
import type { RootStackParamList, RootTabParamList } from '../../navigation/types/navigation';
import { fetchProducts, type Product } from '../../services/actions/productActions';
import type { AppDispatch, RootState } from '../../store/store';
import { getTheme } from '../../theme/theme';
import { styles } from './HomeScreen.styles';

const SKELETON_ITEMS = [null, null, null, null];

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList, 'MainTabs'>
>;

export function HomeScreen({ navigation }: HomeScreenProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { mode } = useSelector((state: RootState) => state.theme);
  const { products, listLoading, refreshing, listError } = useSelector((state: RootState) => state.products);
  const theme = getTheme(mode);

  useEffect(() => {
    const request = dispatch(fetchProducts());
    return () => request.abort();
  }, [dispatch]);

  const retryProducts = useCallback(() => {
    void dispatch(fetchProducts());
  }, [dispatch]);

  const renderItem = useCallback(({ item }: ListRenderItemInfo<Product | null>) => {
    if (item === null) {
      return <ProductSkeleton colors={theme.colors} />;
    }

    return (
      <ProductCard
        product={item}
        colors={theme.colors}
        onPress={() => navigation.navigate('Details', { productId: item.id })}
      />
    );
  }, [navigation, theme.colors]);

  const listData: (Product | null)[] = listLoading && products.length === 0
    ? SKELETON_ITEMS
    : products;

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item === null ? `skeleton-${index}` : String(item.id)}
        renderItem={(info) => renderItem(info)}
        contentContainerStyle={styles.listContent}
        refreshControl={(
          <RefreshControl
            refreshing={refreshing}
            onRefresh={retryProducts}
            tintColor={theme.colors.primary}
            colors={[theme.colors.primary]}
            progressBackgroundColor={theme.colors.surface}
          />
        )}
        ListHeaderComponent={(
          <View style={styles.listHeader}>
            <Text style={[styles.title, { color: theme.colors.text }]}>Products</Text>
            {listError && products.length > 0 && (
              <View style={styles.inlineError}>
                <Text style={[styles.error, { color: theme.colors.error }]}>
                  Could not refresh products. {listError}
                </Text>
                <Button
                  title="Retry"
                  onPress={retryProducts}
                  backgroundColor={theme.colors.primary}
                  textColor={theme.colors.background}
                />
              </View>
            )}
          </View>
        )}
        ListEmptyComponent={(
          <View style={styles.emptyState}>
            {listError ? (
              <>
                <Text style={[styles.emptyTitle, { color: theme.colors.text }]}>Products couldn’t load</Text>
                <Text style={[styles.emptyMessage, { color: theme.colors.mutedText }]}>{listError}</Text>
                <Button
                  title="Retry"
                  onPress={retryProducts}
                  backgroundColor={theme.colors.primary}
                  textColor={theme.colors.background}
                />
              </>
            ) : (
              <Text style={[styles.emptyTitle, { color: theme.colors.mutedText }]}>No products found.</Text>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}