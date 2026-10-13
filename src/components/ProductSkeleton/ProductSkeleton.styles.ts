import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 14,
    minHeight: 132,
    padding: 14,
  },
  listImage: {
    borderRadius: 8,
    height: 100,
    width: 100,
  },
  listContent: {
    flex: 1,
    marginLeft: 14,
  },
  listTitle: {
    borderRadius: 4,
    height: 16,
    marginBottom: 10,
    width: '88%',
  },
  listSubtitle: {
    borderRadius: 4,
    height: 12,
    width: '58%',
  },
  listFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  listPrice: {
    borderRadius: 4,
    height: 16,
    width: 64,
  },
  listRating: {
    borderRadius: 4,
    height: 14,
    width: 48,
  },
  detailsContainer: {
    paddingBottom: 24,
  },
  detailsImage: {
    aspectRatio: 1.15,
    borderRadius: 12,
    marginBottom: 24,
    width: '100%',
  },
  detailsLine: {
    borderRadius: 4,
  },
  detailsTitle: {
    height: 24,
    marginBottom: 14,
    width: '76%',
  },
  detailsRating: {
    height: 14,
    marginBottom: 20,
    width: 84,
  },
  detailsPrice: {
    height: 24,
    marginBottom: 18,
    width: 100,
  },
  detailsCategory: {
    height: 14,
    marginBottom: 28,
    width: 120,
  },
  detailsDescriptionLine: {
    height: 13,
    marginBottom: 10,
    width: '100%',
  },
  detailsDescriptionShort: {
    height: 13,
    width: '64%',
  },
});