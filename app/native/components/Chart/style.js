import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  dash: {
    color: '#dadada',
    fontSize: 28,
  },
  heading: {
    paddingLeft: 10,
    color: '#000000',
    fontSize: 24,
    fontFamily: 'titillium_light',
    textAlign: 'center',
  },
  headingContainer: {
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'titillium_regular',
  },
  chart: {
    backgroundColor: 'green',
  },
  tickLabel: {
    fontSize: 12,
  },
});
