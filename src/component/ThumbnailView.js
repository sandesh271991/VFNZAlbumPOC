import {
  FlatList, Text, View, Image, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator, Provider } from 'react-native-paper';
import React, { Component } from 'react';
import axios from 'axios';
import styles from '../style/ThumbnailView.component.style';
import AlbumDetails from './AlbumDetailsView'



export default class HomeScreen extends Component {
  _isMounted = false;


    // For to Navigation header
    static navigationOptions = () => ({
      headerTitle: 'Album List',
    });

    state = {

      fname: "nsmae",
      sname: "",
      result: "loading"
  }

    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
      };
    }


    getAlbums() {
      this._isMounted = true;
      const { navigation } = this.props;
      const albumId = navigation.getParam('albumID', 'no data');
      axios
        .get(

          `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`

        )
        .then((response) => {
          if (this._isMounted) {
            this.setState({
              isLoading: false,
              dataSource: response.data,
            }, () => {

            });
          }
        })
        .catch((error) => this.setState({ error, isLoading: false }));
    }

    componentWillUnmount() {
      this._isMounted = false;
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


        return (
          <React.Fragment>
            <Provider>
              {/* <AlbumDetails datapass={this.state.result} /> */}
              <View style={styles.listContainer} >

                <FlatList
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
