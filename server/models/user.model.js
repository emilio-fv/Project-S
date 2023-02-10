// Import Mongoose, Bcrypt
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required."]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email."
        }
    },
    phone: {
        type: String,
        required: [true, "Phone number is required."]
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minLength: [8, "Password must be at least 8 characters."]
    }
}, { timestamps: true });

// Confirm Password Virtual Field
userSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

// Confirm Password Validator
userSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords must match.")
    }
    next();
});

// Hash Password
userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    })
});

// Create User Model
const User = mongoose.model("User", userSchema);

// Exports
module.exports = { User: User };