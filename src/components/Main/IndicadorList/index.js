import React from "react";
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const data = [{
    title: 'Dolar',
    description: 'Pesos',
},
{
    title: 'UF',
    description: 'Pesos',
},
];

const IndicadorList = (props) => {

    const navigation = useNavigation();

    const renderItemAccessory = (props) => {
        console.log(props)
        return (
            <Button
                onPress={() => navigateToDetail(props)}
                appearance='ghost'
                accessoryLeft={<Icon {...props} name='info-outline' />}
            />
        )
    };

    const renderItem = ({ item, index }) => (
        <ListItem
            onPress={() => navigateToPrices()}
            style={styles.item}
            title={`${item.title}`}
            description={`${item.description} ${index + 1}`}
            accessoryRight={renderItemAccessory}
        />
    );
    const navigateToPrices = (item) => {
        navigation.navigate("Precios", { item: item })
    }
    const navigateToDetail = (item) => {
        navigation.navigate("Detalle", { item: item })
    }
    return (
        <List
            style={styles.container}
            data={data}
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