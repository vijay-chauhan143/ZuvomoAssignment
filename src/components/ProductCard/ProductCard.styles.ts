import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    marginBottom: 12,
    minHeight: 132,
    padding: 12,
  },
  imageFrame: {
    alignItems: 'center',
    borderRadius: 8,
    height: 104,
    justifyContent: 'center',
    width: 104,
  },
  thumbnail: {
    height: 96,
    width: 96,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 14,
    minHeight: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21,
  },
  category: {
    fontSize: 13,
    marginTop: 5,
    textTransform: 'capitalize',
  },
  meta: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
  },
  rating: {
    fontSize: 12,
    marginLeft: 8,
  },
});