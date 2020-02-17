import {
  FlatList, Text, View, Image, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native-paper';
import React, { Component } from 'react';
import axios from 'axios';
import styles from '../style/Home.component.style';


export default class HomeScreen extends Component {
  _isMounted = false;


    // For to Navigation header
    static navigationOptions = () => ({
      headerTitle: 'Album List',
    });

    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
      };
    }


    getAlbums() {
      this._isMounted = true;
      axios
        .get('https://jsonplaceholder.typicode.com/albums')
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

      FlatListItemSeparator = () => (
          <View style={styles.flatListItemSeparator} />
      )

      render() {
        if (this.state.isLoading) {
          return (
            <View style={{ flex: 1, paddingTop: 30 }}>
                <ActivityIndicator animating={true} size='large' />
            </View>
          );
        }


        return (

          <View style={styles.MainContainer} >

            <FlatList

                data={ this.state.dataSource }
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                renderItem={({ item }) => <View style={styles.listRowContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ThumbnailViewScreen', {
                      albumID: item.id,
                    })} style={styles.listRow}>
                    <View style={styles.listTextNavVIew}>
                      <Text style={styles.albumTitle}> {item.title} </Text>
                      <Ionicons name='md-arrow-dropright' style={styles.detailArrow} />
                    </View>
                    </TouchableOpacity>
                </View>
              }
                keyExtractor = { (item, index) => index.toString() }
            />

          </View>
        );
      }
}
