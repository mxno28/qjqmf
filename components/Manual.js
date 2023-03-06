import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import styles from './styles';

import Manuals from '../assets/Manuals.json'

const Notice = () => {
    const [open, setOpen] = useState(false)
    return (
        <View style={{flex:1, padding: 20}}>
            <TouchableOpacity
                onPress={()=>{setOpen(!open)}}
                style={styles.moreItem}
            >
                <Text>title</Text>
            </TouchableOpacity>
            <View style={open?{display:'flex'}:{display:'none'}}>
                <Text>date</Text>
                <Text>content</Text>
                <Text>.</Text>
                <Text>.</Text>
                <Text>.</Text>
                <TouchableOpacity
                    onPress={()=>{setOpen(!open)}}>
                    <Text>^</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Notice;