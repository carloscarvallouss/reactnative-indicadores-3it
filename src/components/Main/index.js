import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MainContainer from "../common/MainContainer";
import Loading from "../common/Loading";
import IndicadorList from "./IndicadorList";
import useIndicadores from "../../hooks/useIndicadores";
import { useNetInfo } from "@react-native-community/netinfo";
import { Icon, Text } from "@ui-kitten/components";

const Main = () => {
    const [isLoading, indicadores] = useIndicadores()
    const netInfo = useNetInfo()

    if (!netInfo.isConnected)
        return (<MainContainer>
            <Text style={styles.headerTitle}>INDICADORES FINANCIEROS</Text>
            <View style={styles.alert}>
                <Icon
                    style={styles.icon}
                    fill='#fff'
                    name='activity' />
                <Text style={styles.alertText}>Necesitas una conexión a internet para obtener la información</Text>
            </View>
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
    },
    alert: {
        marginTop: 40,
        marginHorizontal: 20,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#263D80",
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    alertText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "600"
    },
    icon: {
        width: 20,
        height: 20,
    }
})

export default Main;