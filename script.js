document.addEventListener('DOMContentLoaded', function() {
    const transactionForm = document.getElementById('transactionForm');
    const transactionsList = document.getElementById('transactionsList');
    const balanceDisplay = document.getElementById('balance');

    let balance = 0;

    transactionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const transactionType = document.getElementById('transactionType').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (isNaN(amount)) {
            alert('Por favor, insira um valor válido.');
            return;
        }

        const transaction = {
            type: transactionType,
            amount: amount
        };

        if (transactionType === 'income') {
            balance += amount;
        } else {
            balance -= amount;
        }

        updateBalanceDisplay();
        addTransactionToList(transaction);
        transactionForm.reset();
    });

    function updateBalanceDisplay() {
        balanceDisplay.textContent = `Saldo: R$ ${balance.toFixed(2)}`;
        balanceDisplay.style.color = balance >= 0 ? 'green' : 'red';
    }

    function addTransactionToList(transaction) {
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction', transaction.type);
        transactionItem.textContent = `${transaction.type === 'income' ? '+' : '-'} R$ ${transaction.amount.toFixed(2)}`;
        transactionsList.appendChild(transactionItem);
    }
    
});