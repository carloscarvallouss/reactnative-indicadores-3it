import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import MainContainer from "../common/MainContainer";
import Loading from "../common/Loading";
import { getPrecios } from "../../services/IndicadoresWS";
import { List, ListItem, Icon, Button } from "@ui-kitten/components";


const Precios = ({ route, navigation }) => {
    const { item } = route.params
    const [isLoading, setIsLoading] = useState(true)
    const [precios, setPrecios] = useState([])
    useEffect(() => {
        if (item.codigo) {
            navigation.setOptions({ title: item.nombre })
            setTimeout(() => {
                getPrecios(item.codigo, res => {
                    if (res.serie) {
                        setPrecios(res.serie)
                    }
                    setIsLoading(false)
                })
            }, 2000);

        }
    }, [])
    const PreciosList = () => <List
        style={styles.list}
        data={precios}
        renderItem={renderItem}
    />
    const renderItem = ({ item, index }) => {
        if (item)
            return (
                <ListItem
                    style={styles.item}
                    title={`$ ${item.valor}`}
                    description={`${item.fecha.substring(0, 10)}`}
                />
            )
    };
    return (
        <MainContainer>
            <Text style={styles.title}>Lista de precios</Text>
            {
                isLoading
                    ?
                    <Loading /> :
                    <>
                        {precios.length > 0
                            ? <PreciosList />
                            : <Text style={styles.textAlert}>Sin valores encontrados</Text>}
                    </>
            }
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#3366FF"
    },
    textAlert: {
        marginVertical: 20,
        alignSelf: "center"
    },
    list: {
        flex: 1,
        marginVertical: 20,
        borderRadius: 5,
    }
})
export default Precios;