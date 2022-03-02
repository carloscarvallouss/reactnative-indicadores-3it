import React from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color="#A66D03" />
            <Text style={styles.text}>OBTENIENDO INFORMACIÓN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        padding: 10,
        fontWeight: "600",
        color: "#A66D03"
    }
})

export default Loading;