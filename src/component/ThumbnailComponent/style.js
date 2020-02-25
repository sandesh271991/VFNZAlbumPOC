import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 
  listContainer: {
    marginTop: 10,
  },

  listRowContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#56b6f6',
    borderWidth: 2,
    backgroundColor: '#e8effe',
  },

  listRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },

  listTextNavVIew: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    width: '100%',
    justifyContent: 'center'
  },

  imageViewContainer: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 30,
    backgroundColor: 'black',
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
