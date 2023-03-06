import { Text, View, Modal, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { openURL } from 'expo-linking';


import styles from './styles';
import removeData from './removeData';

const More = ({navigation}) => {
    const [delVisible, setDelVisible] = useState(false);

    
    const data = [
        {
            'title': '📢 공지사항',
            'onPress': ()=>{navigation.navigate('Notice');}
        },
        /*{
            'title': 'ℹ️ 사용법',
            'onPress': ()=>{navigation.navigate('Manual');}
        },
        {
            'title': '❓ FAQ',
            'onPress': ()=>{}
        },*/
        {
            'title': '🗑️ 내 채팅 삭제',
            'onPress': ()=>{setDelVisible(!delVisible);}
        },
        {
            'title': '✉️ 오류 제보 및 기타 문의',
            'onPress': ()=>{openURL('mailto: dlrauddmlejrgn@gmail.com')}
        }
    ];

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity 
                onPress={item.onPress}
                style={styles.moreItem}
            >
                <Text style={{fontSize: 16}}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{flex:1}}>
            <Modal
                transparent={true}                
                animationType="fade"
                visible={delVisible}
                onRequestClose={() => {
                    setDelVisible(!delVisible);
                }}
            >
                <View style={[{flex: 1, backgroundColor: '#00000055'},styles.centeredContainer]}>
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>내 채팅 삭제</Text>
                        <View style={[styles.centeredContainer, {flex:1}]}>
                            <Text style={{fontSize: 13}}>※ 주의 ※</Text>
                            <Text style={{fontSize: 13, textAlign: 'center', paddingHorizontal: 10}}>사용자 채팅 기록은 서버에 저장되어 있지 않으며, 삭제 시 복구할 수 없습니다.
                            </Text>
                            <View style={{flex:1}}/>
                            <Text>
                                전부 삭제하시겠습니까?
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.buttonContainer}
                                onPress={() => {
                                    setDelVisible(!delVisible)
                                }}
                            >
                                <Text style={styles.cancelButton}>취소</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContainer}
                                onPress={ () => {
                                    removeData('myChats');
                                    setDelVisible(!delVisible)
                                }}
                            >
                                <Text style={styles.okButton}>삭제</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <FlatList
                data={data}
                renderItem={renderItem}
                style={{padding: 20, flex:1}}
            />
            <View style={{padding: 20}}>
                <Text style={styles.credit}>Copyright ⓒ 2023 두둥!!, 하루</Text>
                <Text style={styles.credit}>Thanks to.</Text>
                <Text style={styles.credit}>자문: 엔야</Text>
                <Text style={styles.credit}>데이터 제공: 나나, 낙찌, 양갱수갱, 율, 쭒둥이, 태단, 호연</Text>
                <Text style={styles.credit}>도움: 뜨거운 알토란, 비화, 승귄, 양갱수갱, 오뜨, 율, 치쥬, 햅</Text>
            </View>
        </View>
    )
}

export default More;