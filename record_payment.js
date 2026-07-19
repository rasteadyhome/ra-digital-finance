const db = require('./db.js');

async function recordPayment(accountId, amount) {
  try {
    await db('transactions').insert({
      account_id: accountId,
      amount: amount,
      type: 'payment',
      created_at: new Date().toISOString()
    });
    
    console.log(`Successfully recorded payment of $${amount} for account ID: ${accountId}`);
    
    const transactions = await db('transactions').select('*');
    console.table(transactions);
    
  } catch (err) {
    console.error("Error recording payment:", err);
  } finally {
    process.exit();
  }
}

recordPayment(1, 50.00);