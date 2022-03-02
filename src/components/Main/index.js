import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import MainContainer from "../common/MainContainer";
import Loading from "../common/Loading";
import IndicadorList from "./IndicadorList";
import { Icon, Button } from "@ui-kitten/components";

const Main = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [indicadores, setIndicadores] = useState([])
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
            <Text style={styles.headerTitle}>INDICADORES FINANCIEROS</Text>
            <View style={styles.box}>
                <Text>
                    Selecciona un indicador para ver la lista de precios y sus variaciones, para ver detalle del indicador presiona el botón ( i )
                </Text>
            </View>
            <IndicadorList indicadores={indicadores} />

        </MainContainer>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 34,
        color: "#4D79FF",
        fontWeight: "400"
    },
    box: {
        marginBottom: 10,
    }
})

export default Main;