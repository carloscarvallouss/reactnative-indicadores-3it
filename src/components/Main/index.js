import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import MainContainer from "../common/MainContainer";
import Loading from "../common/Loading";

const Main = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }, [])
    if (isLoading)
        return (
            <MainContainer>
                <Loading />
            </MainContainer>
        )
    return (
        <MainContainer>
            <Text style={styles.headerTitle}>Menu principal</Text>
            <View style={styles.box}>
                <Text>Aca va un texto introductorio</Text>
            </View>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 18,
        color: "#A66D03",
        fontWeight: "400"
    },
    box: {
        backgroundColor: "#F2DFA7",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    }
})

export default Main;