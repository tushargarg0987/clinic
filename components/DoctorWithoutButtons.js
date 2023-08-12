import { Image, Text, View,Dimensions, TouchableOpacity } from "react-native"

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

function DoctorWithoutButton() {
    return (
        <View style={{backgroundColor: 'white',borderRadius: 25}}>
                <View style={{flexDirection: 'row',paddingHorizontal: 0.05*width,padding: 0.02*height,elevation: 4,justifyContent: 'space-between'}}>
                    <Image
                        style={{
                            width: 70,
                            aspectRatio: 1,
                            height: undefined,
                            borderRadius: 50,
                            
                        }}
                        source={{
                            uri: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80',
                        }} />
                    <View style={{justifyContent: 'space-around'}}>
                        <View>
                        <Text style={{fontSize: 18,fontWeight: 'bold',color: 'black',overflow: 'scroll'}}>DR Sharma</Text>
                        <Text style={{fontSize: 16,color: 'black'}}>Dental Specialist</Text>
                        </View>
                </View>
                <View style={{justifyContent: 'center',alignItems: 'flex-end'}}>
                    <Text style={{color: 'black',fontSize: 16,fontWeight: 'bold'}}>5.0 ⭐</Text>
                </View>
                
                </View>
            </View>
    )
}

export default DoctorWithoutButton