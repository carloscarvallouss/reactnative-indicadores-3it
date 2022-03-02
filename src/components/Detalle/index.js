import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MainContainer from "../common/MainContainer";
import { Card, Text } from "@ui-kitten/components";
import PreciosChart from "./PreciosChart";
import { getPrecios } from "../../services/IndicadoresWS";
import Loading from "../common/Loading"

const Detalle = ({ route, navigation }) => {

    const { item } = route.params;
    const [precios, setPrecios] = useState({
        dates: [], val: []
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (item.codigo) {
            navigation.setOptions({ title: item.nombre })
            getPrecios(item.codigo, res => {
                if (res.serie) {
                    let filtered = res.serie.map(i => {
                        i.fecha = i.fecha.substring(0, 10)
                        return i
                    }
                    ).slice(0, 10)
                    setPrecios(filtered)
                }
                setIsLoading(false)
            })
        }
    }, [])
    const Header = (props) => (
        <View {...props}>
            <Text category='h1' status={"primary"} >${item.valor}</Text>
            <Text category='s1'>Valor</Text>
        </View>
    );
    if (isLoading)
        return (
            <MainContainer><Loading /></MainContainer>
        )
    return (
        <MainContainer>
            <ScrollView style={styles.container}>
                <Card style={styles.card} header={Header}>
                    <View>
                        <Text category={"c1"}>Nombre</Text>
                        <Text style={styles.cardText}>{item.nombre}</Text>
                    </View>
                    <View>
                        <Text category={"c1"}>Unidad de medida</Text>
                        <Text style={styles.cardText}>{item.unidad_medida}</Text>
                    </View>
                    <View>
                        <Text category={"c1"}>Fecha</Text>
                        <Text style={styles.cardText}>{item.fecha.substring(0, 10)}</Text>
                    </View>
                </Card >
                <PreciosChart precios={precios} />
            </ScrollView>
        </MainContainer >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: "700",
        color: "#3366FF",
        alignSelf: "center",
        marginVertical: 20,
    },
    card: {
        borderRadius: 5,
    },
    cardText: {
        marginBottom: 10
    }
})

export default Detalle;