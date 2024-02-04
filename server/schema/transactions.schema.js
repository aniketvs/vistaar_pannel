const mongoose=require('mongoose');
const transactionSchema = new mongoose.Schema({
    date: Date,
    amount: Number,
    transaction_code: String,
    symbol: String,
    price: Number,
    total: Number,
  });
  
  const bucketSchema = new mongoose.Schema({
    account_id: Number,
    transaction_count: Number,
    bucket_start_date: Date,
    bucket_end_date: Date,
    transactions: [transactionSchema],
  });
module.exports = mongoose.model('transactions',bucketSchema);