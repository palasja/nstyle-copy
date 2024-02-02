import { useEffect, useState } from "react";
import client, { getSetRef, allTransactions } from "../../db/operations";
// @ts-ignore
import TransactionItem from "./TransactionItem";

export default function Dashboard() {
  
  const [listTransaction, setListTransaction] = useState([]);

  // const transactionSetRef = getSetRef('Transaction');
  // const streamOptions = { fields: [ 'action', 'document' ] }

  // @ts-ignore
  // const streamClient = client.stream(transactionSetRef, streamOptions)
  //   // @ts-ignore
  //   .on('start', start => { 
  //     console.log('start', start);
  //   })
  //   // @ts-ignore
  //   .on('set', set => {
  //     if(set.action === 'remove') {
  //       // @ts-ignore
  //       console.log('remove', set.document.ref.value.id);
  //       setListTransaction(
  //         // @ts-ignore
  //         listTransaction.filter(item => item.id !== set.document.ref.value.id)
  //       );
  //     }
  //     // if(set.action === 'add') { 
  //     //   console.log('add', set.document);
  //     //   setListTransaction([...listTransaction, {
  //     //     id: set.document.ref.value.id,
  //     //     status: 'Pending',
  //     //   }]);
  //     // }
  //   })

  useEffect(() => {
    
    getAllTransaction();
  }, []);

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   streamClient.start();
  //   return function cleanUp() {
  //     streamClient.close();
  //   }
  // });

  const getAllTransaction = async () => { 
    const transactions = await allTransactions();

    // @ts-ignore
    const allTransaction = [];

    // @ts-ignore
    transactions.data.forEach(element => {
      allTransaction.push({
        id: element.ref.id,
        ...element.data
      });
    });
    // @ts-ignore
    setListTransaction(allTransaction);
    // @ts-ignore
    console.log(allTransaction);
  }

  return (
    <div className="flex flex-col items-center">
      <h2>Dashboard</h2>
      {listTransaction.map((transaction) => (
        <TransactionItem 
          // @ts-ignore
          key={transaction.id} 
          transaction={transaction}
        />
      ))}
    </div>
  );
}
