import mongoose from 'mongoose';
import 'dotenv/config';
import userModel from './models/userModel.js';

async function updateUserRole() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB');

    // Find the user with the specified email and update their role to admin
    const userEmail = 'hirushadilshan890@gmail.com';
    const result = await userModel.updateOne(
      { email: userEmail },
      { $set: { role: 'admin' } }
    );

    if (result.matchedCount > 0) {
      console.log(`Successfully updated user ${userEmail} to admin role`);
      console.log(`Modified ${result.modifiedCount} document(s)`);
    } else {
      console.log(`User with email ${userEmail} not found in the database`);
    }

    // Close the connection
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error updating user role:', error.message);
  }
}

// Run the function
updateUserRole();