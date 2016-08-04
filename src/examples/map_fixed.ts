export const returnValues = (transactions) => {
    return transactions.map((transaction) => transaction.value);
}

// Better
// 1.  3 lines instead of 10