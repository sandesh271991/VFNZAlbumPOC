import React, { Component } from 'react';
import {
  FlatList, Text, View, Image, TouchableOpacity,
} from 'react-native';
import { ActivityIndicator, Provider } from 'react-native-paper';
import axios from 'axios';
import styles from '../ThumbnailComponent/style';
import ErrorAlert from '../../common/ErrorAlertComponent/errorAlert';
import * as myConstant from '../../common/Constants';

export default class HomeScreen extends Component {

  // For to Navigation header
  static navigationOptions = () => ({
    headerTitle: 'Album Information',
  });

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      apiLoadingError: false,
    };
  }

  getAlbums() {
    const { navigation } = this.props;
    const albumId = navigation.getParam('albumID', 'no data');
    axios
      .get(
        myConstant.API + `photos?albumId=${albumId}`, {timeout: myConstant.TIMEOUT} 
      )
      .then((response) => {
          this.setState({
            isLoading: false,
            dataSource: response.data,
          });
      })
      .catch(err => {
        this.setState({isLoading: false, apiLoadingError: true})
      }); 
  }

  componentDidMount() {
    this.getAlbums();
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 30 }}>
            <ActivityIndicator animating={true} size='large' />
        </View>
      );
    }

    if (this.state.apiLoadingError) {
      return (
        <ErrorAlert />
      );
    }

    return (
      <React.Fragment>
        <Provider>
          <View style={styles.listContainer} >

            <FlatList
                testID='flatlist'
                data={ this.state.dataSource } numColumns={3}
                renderItem={({ item }) => <View style={styles.listRowContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AlbumDetailsViewScreen', {
                  albumTitle: item.title, albumImg: item.url
                })} style={styles.listRow}>
                    <View style={styles.listTextNavVIew}>
                      <Image source = {{ uri: item.thumbnailUrl }} style={styles.imageViewContainer} />
                    </View>
                    </TouchableOpacity>
                </View>
              }
                keyExtractor = { (item, index) => index.toString() }
            />

          </View>
        </Provider>
      </React.Fragment>
    );
  }
}
