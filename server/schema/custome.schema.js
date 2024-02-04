const mongoose=require('mongoose');
const schema = new mongoose.Schema({
    username: String,
    name: String,
    address: String,
    birthdate: Date,
    email: String,
    accounts: [Number],
    tier_and_details: {
        type: Map,
        of: {
          tier: String,
          benefits: [String],
          active: Boolean,
          id: String
        }
    }
});

module.exports = mongoose.model('customers',schema);