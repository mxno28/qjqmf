import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

import styles from './styles';

import Notices from '../assets/Notices.json'
import Details from './Details';

const Notice = () => {

    const renderItem = ({item, index}) => {
        return(
            <Details item={item} index={index} numbered={true}/>
        );
    }
    return (
        <View /*style={{flex:1}}*/>
            <FlatList
                data={Notices}
                style={{padding: 20}}
                renderItem={renderItem}
                inverted={true}
            />
        </View>
    );
}

export default Notice;