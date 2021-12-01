const mongoose = require('mongoose');


const AddressSchema = mongoose.Schema({
    region: String,
    city: String,
    street: String,
    houseNumber: String,
  });

  const ThesisSchema = mongoose.Schema({
    topic: String,
    promoter: String,
    reviewer: String
  });


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    study: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    albumnumber: {
        type: String,
        required: true,
    },
    address: {
        type: AddressSchema,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    birthplace: {
        type: String,
        required: true,
    },
    pesel: {
        type: String,
        required: true,
        length: 11,
    },
    thesis: {
        type: ThesisSchema,
        required: true,
    }
}) 

const User = mongoose.model("User", userSchema);

module.exports = User;