import { View } from 'react-native';

import type { ThemeColors } from '../../theme/colors';
import { styles } from './ProductSkeleton.styles';

type ProductSkeletonProps = {
  colors: ThemeColors;
  variant?: 'list' | 'details';
};

export function ProductSkeleton({ colors, variant = 'list' }: ProductSkeletonProps) {
  if (variant === 'details') {
    return (
      <View style={styles.detailsContainer}>
        <View style={[styles.detailsImage, { backgroundColor: colors.border }]} />
        <View style={[styles.detailsLine, styles.detailsTitle, { backgroundColor: colors.border }]} />
        <View style={[styles.detailsLine, styles.detailsRating, { backgroundColor: colors.border }]} />
        <View style={[styles.detailsLine, styles.detailsPrice, { backgroundColor: colors.border }]} />
        <View style={[styles.detailsLine, styles.detailsCategory, { backgroundColor: colors.border }]} />
        <View style={[styles.detailsLine, styles.detailsDescriptionLine, { backgroundColor: colors.border }]} />
        <View style={[styles.detailsLine, styles.detailsDescriptionLine, { backgroundColor: colors.border }]} />
        <View style={[styles.detailsLine, styles.detailsDescriptionShort, { backgroundColor: colors.border }]} />
      </View>
    );
  }

  return (
    <View style={[styles.card, { backgroundColor: colors.surface }]}>
      <View style={[styles.listImage, { backgroundColor: colors.border }]} />
      <View style={styles.listContent}>
        <View style={[styles.listTitle, { backgroundColor: colors.border }]} />
        <View style={[styles.listSubtitle, { backgroundColor: colors.border }]} />
        <View style={styles.listFooter}>
          <View style={[styles.listPrice, { backgroundColor: colors.border }]} />
          <View style={[styles.listRating, { backgroundColor: colors.border }]} />
        </View>
      </View>
    </View>
  );
}