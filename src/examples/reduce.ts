export const sumDebits = (debitTransactions) => {

    let totalDebits: number;

    debitTransactions.forEach((debitTransaction) => {
        totalDebits -= debitTransaction.value;
    });

    return totalDebits;
}