import React from "react";
import { Stock } from "../../types/stocks";
import {
  StyledTouchableOpacity,
  TableCell,
  TableRow,
} from "../../screens/HomeScreenStyles";

interface StockListItemProps {
  item: Stock;
  navigation: any;
}

const StockListItem: React.FC<StockListItemProps> = ({ item, navigation }) => (
  <TableRow>
    <StyledTouchableOpacity
      onPress={() =>
        navigation.navigate("StockDetail", { symbol: item.symbol })
      }
    >
      <TableCell>{item.symbol}</TableCell>
    </StyledTouchableOpacity>
    <TableCell>{item.name}</TableCell>
    <TableCell>{item.currency}</TableCell>
    <TableCell>{item.type}</TableCell>
  </TableRow>
);

export default StockListItem;
