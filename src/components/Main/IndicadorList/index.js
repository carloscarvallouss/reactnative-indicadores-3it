import React, { useEffect } from "react";
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const IndicadorList = ({ indicadores }) => {

    const navigation = useNavigation();

    const renderItemAccessory = (item) => {
        return (
            <Button
                onPress={() => navigateToDetail(item)}
                appearance='ghost'
                accessoryLeft={<Icon name='info-outline' />}
            />
        )
    };
    const renderItem = ({ item, index }) => {
        if (item.nombre)
            return (
                <ListItem
                    onPress={() => navigateToPrices(item)}
                    style={styles.item}
                    title={`${item.nombre}`}
                    description={`${item.unidad_medida}`}
                    accessoryRight={renderItemAccessory(item)}
                />
            )
    };
    const navigateToPrices = (item) => {
        navigation.navigate("Precios", { item: item })
    }
    const navigateToDetail = (item) => {
        navigation.navigate("Detalle", { item: item })
    }
    return (
        <List
            style={styles.container}
            data={indicadores}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        marginVertical: 10,
    },
    item: {
        color: "#F2C230"
    },
});


export default IndicadorList;