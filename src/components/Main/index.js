import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import MainContainer from "../common/MainContainer";
import Loading from "../common/Loading";
import IndicadorList from "./IndicadorList";
import useIndicadores from "../../hooks/useIndicadores";

const Main = () => {
    const [isLoading, indicadores] = useIndicadores()
    return (
        <MainContainer>
            <Text style={styles.headerTitle}>INDICADORES FINANCIEROS</Text>
            <View style={styles.box}>
                <Text>
                    Selecciona un indicador para ver la lista de precios y sus variaciones, para ver detalle del indicador presiona el botón ( i )
                </Text>
            </View>
            {
                isLoading ? <Loading /> : <IndicadorList indicadores={indicadores} />
            }
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        marginTop: 100,
        fontSize: 34,
        color: "#4D79FF",
        fontWeight: "400"
    },
    box: {
        marginBottom: 10,
    }
})

export default Main;