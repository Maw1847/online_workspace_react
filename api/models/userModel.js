const mongoose = require('mongoose');

const UserModel = mongoose.model(
    "online_workspace",
    {
        email: {
            type: String,
            required: true,
        },
        nom: {
            type: String,
            required: true,
        },
        prenom: {
            type: String,
            required: true,
        },
        tel: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    "users"
);

module.exports = { UserModel };