import mongoose, { Schema } from 'mongoose';

// Define the Contact schema
const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  company: {
    type: String,
    required: [true, 'Company is required'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Contact model
// We need to use this pattern to prevent NextJS from creating multiple model instances
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
