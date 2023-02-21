import { Text, View, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

import styles from './styles';
import removeData from './removeData';

const More = () => {
    const [delVisible, setDelVisible] = useState(false);

    return (
        <View>
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
                            <Text>사용자 채팅 기록은 서버에 저장되어 있지 않으며, 삭제 시 복구할 수 없습니다.
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
            <ScrollView>
                
                <TouchableOpacity onPress={()=>{setDelVisible(!delVisible);}}>
                    <Text>
                        내 채팅 삭제
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text>
                        오류 제보 및 기타 문의
                        dlrauddmlejrgn@gmail.com
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default More;