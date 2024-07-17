import React from "react";
import { Stock } from "../../types/stocks";
import { InfoContainer, InfoText } from "../../screens/StockDetailScreenStyles";

interface StockInfoProps {
  stockInfo: Stock;
}

const StockInfo: React.FC<StockInfoProps> = ({ stockInfo }) => (
  <InfoContainer>
    <InfoText>Symbol: {stockInfo.symbol}</InfoText>
    <InfoText>Name: {stockInfo.name}</InfoText>
    <InfoText>Currency: {stockInfo.currency}</InfoText>
    <InfoText>Exchange: {stockInfo.exchange}</InfoText>
    <InfoText>Country: {stockInfo.country}</InfoText>
    <InfoText>Type: {stockInfo.type}</InfoText>
  </InfoContainer>
);

export default StockInfo;
