import React from "react";
import { TableHeader, TableHeaderText } from "../../screens/HomeScreenStyles";

const StockListHeader: React.FC = () => (
  <TableHeader>
    <TableHeaderText>Símbolo</TableHeaderText>
    <TableHeaderText>Nombre</TableHeaderText>
    <TableHeaderText>Moneda</TableHeaderText>
    <TableHeaderText>Tipo</TableHeaderText>
  </TableHeader>
);

export default StockListHeader;
