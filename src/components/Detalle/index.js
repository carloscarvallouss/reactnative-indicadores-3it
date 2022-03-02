import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MainContainer from "../common/MainContainer";
import { Card, Text } from "@ui-kitten/components";
import PreciosChart from "../Precios/PreciosChart";

const Detalle = ({ route, navigation }) => {

    const { item } = route.params;
    const { precios, setPrecios } = useState([])
    useEffect(() => {
        console.log(item)
        if (item.codigo) {
            navigation.setOptions({ title: item.nombre })
        }
    }, [])
    const Header = (props) => (
        <View {...props}>
            <Text category='h1' status={"primary"} >${item.valor}</Text>
            <Text category='s1'>Valor</Text>
        </View>
    );
    return (
        <MainContainer>
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
        </MainContainer >
    )
}
const styles = StyleSheet.create({
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