import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, 'First name must contain at least 3 characters!'],
        maxLength: [30, 'First name cannot exceed 30 characters!'],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, 'Last name must contain at least 3 characters!'],
        maxLength: [30, 'Last name cannot exceed 30 characters!'],
    },
    email: { // Fixed typo from 'emial' to 'email'
        type: String,
        required: true,
        validate: [validator.isEmail, 'Provide a valid email!'], // Fixed validator method
    },
    phone: {
        type: String,
        required: true, // Fixed typo from 'require' to 'required'
        minLength: [10, 'Phone number must contain only 10 digits'],
        maxLength: [10, 'Phone number must contain only 10 digits'],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model('Reservation', reservationSchema);