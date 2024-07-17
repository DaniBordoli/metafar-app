import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { NoDataText } from "../../screens/StockDetailScreenStyles";
import { StockData } from "../../types/stocks";

interface StockChartProps {
  data: StockData[];
}

const StockChart: React.FC<StockChartProps> = ({ data }) => (
  <>
    {data && data.length > 0 ? (
      <LineChart
        data={{
          labels: data.map((item) => item.datetime),
          datasets: [{ data: data.map((item) => parseFloat(item.close)) }],
        }}
        width={Dimensions.get("window").width - 60}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: "#4929B4",
          backgroundGradientFrom: "#6D54C3",
          backgroundGradientTo: "#927FD2",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { borderRadius: 16 },
          propsForDots: { r: "6", strokeWidth: "2", stroke: "#927FD2" },
        }}
        bezier
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
    ) : (
      <NoDataText>No data available for the selected interval.</NoDataText>
    )}
  </>
);

export default StockChart;
