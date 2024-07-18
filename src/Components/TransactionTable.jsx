import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from "@chakra-ui/react";
  
  const TransactionTable = ({ transactions }) => {
    return (
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Transazioni Recenti</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Tipo</Th>
              <Th>Importo</Th>
              <Th>Data</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction) => (
              <Tr key={transaction.id}>
                <Td>{transaction.id}</Td>
                <Td>{transaction.transaction_type}</Td>
                <Td>{transaction.amount}</Td>
                <Td>{transaction.transaction_date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  };
  
  export default TransactionTable;
  