import { Image, Text, View,Dimensions, TouchableOpacity } from "react-native"

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

function ButtonDoctor() {
    return (
        <View style={{backgroundColor: 'white',borderRadius: 25}}>
                <View style={{flexDirection: 'row',paddingHorizontal: 0.05*width,padding: 0.02*height,elevation: 4}}>
                    <Image
                        style={{
                            width: 100,
                            aspectRatio: 1,
                            height: undefined,
                            borderRadius: 50,
                            marginRight: 0.05*width
                        }}
                        source={{
                            uri: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80',
                        }} />
                    <View style={{justifyContent: 'space-around'}}>
                        <View>
                        <Text style={{fontSize: 18,fontWeight: 'bold',color: 'black',overflow: 'scroll'}}>DR Sharma</Text>
                        <Text style={{fontSize: 16,color: 'black'}}>Dental Specialist</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{backgroundColor: '#47A9FF',padding: 0.01*width,paddingHorizontal:0.02*width,borderBottomLeftRadius: 8,borderTopLeftRadius: 8}}>
                                <Text style={{color: 'white'}}>13:30</Text>
                            </View>
                            <View style={{backgroundColor: '#C8E4FF',padding: 0.01*width,paddingHorizontal:0.02*width,borderBottomRightRadius: 8,borderTopRightRadius: 8}}>
                                <Text style={{color: '#6D6C6C'}}>7 Aug, Mon</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'space-evenly',marginBottom: 0.03*height}}>
                    <TouchableOpacity style={{width: '40%',}}>
                        <Text style={{color: '#FF5454',borderWidth: 1,borderColor: '#FF5454',padding: 10,textAlign: 'center',borderRadius: 10}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '40%',}}>
                        <Text style={{color: 'white',padding: 10,textAlign: 'center',borderRadius: 10,backgroundColor: '#47A9FF'}}>Set Alarm</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default ButtonDoctor