export const sumDebits = (debitTransactions) => {
    return debitTransactions.reduce((sum, debitTransaction) => sum - debitTransaction.value, 0);
}

// Better
// 1.  3 lines instead of 10