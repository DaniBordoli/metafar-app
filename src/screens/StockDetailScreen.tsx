import React, { useState, useEffect } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import { StockDetailScreenProps } from "../types/navigation";
import { Stock, StockData } from "../types/stocks";
import { Container, Title } from "./StockDetailScreenStyles";
import StockInfo from "../components/StockInfo";
import StockChart from "../components/StockChart";
import IntervalButtons from "../components/IntervalButton";
import {
  fetchStockData,
  fetchStockInfo,
  fetchAnnualStockData,
} from "../services/api";

const StockDetailScreen: React.FC<StockDetailScreenProps> = ({ route }) => {
  const { symbol } = route.params;
  const [data, setData] = useState<StockData[]>([]);
  const [interval, setInterval] = useState<string>("1day");
  const [stockInfo, setStockInfo] = useState<Stock | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (interval === "1year") {
      fetchAnnualStockDataFunction();
    } else {
      fetchStockDataFunction();
    }
  }, [interval]);

  useEffect(() => {
    fetchStockInfoFunction();
  }, []);

  const fetchStockDataFunction = async () => {
    setLoading(true);
    try {
      const data = await fetchStockData(symbol, interval);
      setData(data);
    } catch (error) {
      setData([]);
      console.log("No data values found for the given interval.");
    } finally {
      setLoading(false);
    }
  };

  const fetchAnnualStockDataFunction = async () => {
    setLoading(true);
    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    const endDate = today.toISOString().split("T")[0];
    const startDate = oneYearAgo.toISOString().split("T")[0];

    try {
      const data = await fetchAnnualStockData(symbol, startDate, endDate);
      setData(data);
    } catch (error) {
      setData([]);
      console.log("No data values found for the given interval.");
    } finally {
      setLoading(false);
    }
  };

  const fetchStockInfoFunction = async () => {
    try {
      const info = await fetchStockInfo(symbol);
      setStockInfo(info);
    } catch (error) {
      setStockInfo(null);
      console.log("Error fetching stock info:", error);
    }
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <Container>
      {stockInfo && <StockInfo stockInfo={stockInfo} />}
      <Title>{symbol}</Title>
      <IntervalButtons setInterval={setInterval} />
      <StockChart data={data} />
    </Container>
  );
};

export default StockDetailScreen;
