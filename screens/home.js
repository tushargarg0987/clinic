import { Image, ScrollView, Text, View,Dimensions, TouchableOpacity } from "react-native"
import ButtonDoctor from "../components/ButtonDoctor"
import DoctorWithoutButton from "../components/DoctorWithoutButtons"

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

function HomePage() {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{ backgroundColor: '#F2F2F2', paddingHorizontal: 15,paddingVertical: 0.03*height }}>
            <View
                style={{
                    marginLeft: 15
                }}>
                <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>Hi Tushar</Text>
            </View>
            <Text style={{ color: 'black',marginLeft: 15,marginVertical: 0.02*height }}>Upcoming Appointments</Text>
            <ButtonDoctor />
            <Text style={{ color: 'black',marginLeft: 15,marginVertical: 0.02*height }}>Top Doctors</Text>
            <DoctorWithoutButton />
        </ScrollView>
    )
}

export default HomePage