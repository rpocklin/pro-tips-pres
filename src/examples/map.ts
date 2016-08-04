export const returnValues = (transactions) => {

    let transactionValues = [];

    transactions.forEach((transaction) => {
        transactionValues.push(transaction.value);
    });

    return transactionValues;
}
