import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
    padding: 18,
  },
  listHeader: {
    marginBottom: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
  },
  inlineError: {
    marginTop: 12,
  },
  error: {
    fontSize: 14,
    lineHeight: 20,
  },
  emptyState: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  emptyMessage: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
    textAlign: 'center',
  },
});