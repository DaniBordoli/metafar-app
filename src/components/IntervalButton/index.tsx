import React from "react";
import { Button } from "react-native";
import { ButtonContainer } from "../../screens/StockDetailScreenStyles";

interface IntervalButtonsProps {
  setInterval: (interval: string) => void;
}

const IntervalButtons: React.FC<IntervalButtonsProps> = ({ setInterval }) => (
  <ButtonContainer>
    <Button title="Daily" onPress={() => setInterval("1day")} color="#6D54C3" />
    <Button
      title="Weekly"
      onPress={() => setInterval("1week")}
      color="#6D54C3"
    />
    <Button
      title="Monthly"
      onPress={() => setInterval("1month")}
      color="#6D54C3"
    />
    <Button
      title="Annual"
      onPress={() => setInterval("1year")}
      color="#6D54C3"
    />
  </ButtonContainer>
);

export default IntervalButtons;
