import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class PhotoSection extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.thumbnailSelection}>
                    <Image
                        style={styles.thumbnail} 
                        source={{uri: 'https://www.mundociencia.com.br/wp-content/uploads/2016/07/socrates.jpg'}}/>
                    <View style={styles.userContainer}>
                        <Text style={styles.username}>Sócrates</Text>
                    </View>
                </View>
                <View>
                </View>
                <View>
                    <Image 
                        style={{height: 250}}
                        source={{uri: 'http://www.infoescola.com/wp-content/uploads/2008/06/platao.jpg'}}/>
                </View>
                <View style={styles.heartContainer}>
                    <AntDesign 
                        name="hearto"
                        size={23}/>
                </View>
                <View style={styles.imageMeta}>
                    <Text style={styles.username}>Sócrates</Text>
                    <Text>#platao #curtindo #sol # estatua</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
    container: {
        margin: 10
    },
    thumbnailSelection: {
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userContainer: {
        justifyContent: 'center',
        padding: 5
    },
    imageMeta: {
        flexDirection: 'row',
        paddingRight: 5,
    },
    username: {
        fontWeight: 'bold',
        paddingRight: 5
    },
    heartContainer: {
        paddingTop: 10,
        paddingBottom: 5
    }
});

