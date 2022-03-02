import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const PreciosChart = ({ precios }) => {

    return (
        <LineChart
            data={{
                labels: precios.dates,
                datasets: [{ data: precios.val }]
            }}
            width={Dimensions.get("window").width - 30} // from react-native
            height={320}
            yAxisLabel="$"
            verticalLabelRotation={70}
            yAxisInterval={1}
            chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                },
            }}
            bezier
            style={{
                borderBottomRightRadius: 15,
                marginVertical: 10
            }}
        />
    )
}

export default PreciosChart;