import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  listRowContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'space-between',
  },

  listRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'space-between',
  },

  listTextNavVIew: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'stretch',

  },

  albumTitle: {
    padding: 10,
    fontSize: 18,
    marginRight: 2,
    flexWrap: 'wrap',
  },

  flatListItemSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: '#56b6f6',
  },

  detailArrow: {
    fontSize: 30,
    marginRight: 5,
  },

});
