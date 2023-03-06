import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import styles from './styles';

const Details = ({item, index, numbered}) => {
    const [open, setOpen] = useState(false);
    return(
        <View style={{marginBottom: 10, backgroundColor: '#FFFFFF99', borderRadius: 10}}>
            <TouchableOpacity
                onPress={()=>{setOpen(!open)}}
                style={[styles.moreItem, 
                    numbered ? styles.numbered : {}, 
                    open ? styles.opened : {},
                    {marginBottom: 0}
                ]}
            >
                <Text  style={styles.number}>
                    {index+1}
                </Text>
                <Text  style={{fontSize: 16}}>
                    {item.title}
                </Text>
            </TouchableOpacity>
            <View 
                style={[open?{display:'flex'}:{display:'none'}, styles.detail]}
            >
                <Text style={{marginBottom: 12}}>{item.content}</Text>
                <Text style={{color: 'grey', fontSize: 12}}>
                    {item.date}
                </Text>
            </View>
        </View>
    );
}

export default Details;