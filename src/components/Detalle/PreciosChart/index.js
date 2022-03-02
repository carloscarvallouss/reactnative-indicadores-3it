import React from "react";
import { Dimensions } from "react-native";
import { VictoryLine, VictoryChart, VictoryLabel, VictoryAxis, VictoryTheme, VictoryScatter } from "victory-native";

const PreciosChart = ({ precios }) => {
    return (
        <VictoryChart domainPadding={20} width={Dimensions.get("window").width} theme={VictoryTheme.material}>
            <VictoryLine
                style={{
                    data: { stroke: "#4D79FF" },
                    parent: { border: "1px solid #ccc" },
                    labels: {
                        fontSize: 15,
                        fill: ({ datum }) => datum.x === 3 ? "#000000" : "#c43a31"
                    }
                }}
                data={precios} x="fecha" y="valor"
                labels={({ datum }) => datum.y}
            />
            <VictoryScatter
                data={precios}
                x="fecha" y="valor"
                size={7}
                style={{
                    data: {
                        fill: "#3D61CC"
                    }
                }}
            />
            <VictoryAxis dependentAxis />
            <VictoryAxis tickLabelComponent={<VictoryLabel angle={30} />} />
        </VictoryChart>
    )
}

export default PreciosChart;