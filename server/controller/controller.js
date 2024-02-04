const customers = require("../schema/custome.schema");
const transactions = require("../schema/transactions.schema");
const accounts=require('../schema/account.schema');
exports.getCustomer = async (req, res) => {
  try {
    const result = await customers.find({active:true});
    res.status(200).json({ status: true, data: result });
  } catch {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
exports.getTransactions = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await transactions.find({
      account_id: id,
    });
    res.status(200).json({ status: true, data: result });
  } catch {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
exports.getAccountId = async (req, res) => {
    try {
      const result = await transactions.find({
       transactions:{
        $elemMatch: {"amount": {$lt: 5000}}
       }
      },
      ).distinct('account_id');
      res.status(200).json({ status: true, data: result });
    } catch {
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  };

  exports.getDistinctProduct = async (req, res) => {
    try {
      const result = await accounts.distinct("products");
      res.status(200).json({ status: true, data: result });
    } catch {
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  };
  ``
