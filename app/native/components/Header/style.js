import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 37,
  },
  title: {
    fontSize: 20,
    color: '#de8f33',
    paddingLeft: 20,
    paddingTop: 5,
    fontFamily: 'titillium_regular',
  },
  border: {
    height: 1,
    backgroundColor: '#d7d7d7',
  },
});
