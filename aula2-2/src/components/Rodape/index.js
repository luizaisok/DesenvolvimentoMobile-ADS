import { View, Text, StyleSheet, Button } from "react-native";

export default () => (
    <View style={Estilo.container}>
        <Button
            title="Sair"
            color={'pink'}
            onPress={()=>console.log("AAAAAAAAAAAA")}
        />
    </View>
)

const Estilo = StyleSheet.create({
    container:{
        alignItems: 'center',
    }
})