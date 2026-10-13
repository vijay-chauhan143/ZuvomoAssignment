import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  heroFrame: {
    alignItems: 'center',
    borderRadius: 12,
    height: 280,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroImage: {
    height: '100%',
    width: '100%',
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
  },
  galleryFrame: {
    alignItems: 'center',
    borderRadius: 8,
    height: 76,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 76,
  },
  galleryImage: {
    height: 68,
    width: 68,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 32,
    marginTop: 22,
  },
  rating: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
  },
  category: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 24,
  },
  errorState: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
});