import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function GET(req: NextRequest) {
  try {
    console.log('Testing MongoDB connection...');
    console.log('MongoDB URI:', process.env.MONGODB_URI ? 'URI exists' : 'URI missing');
    
    // Try to connect to the database
    const mongoose = await connectToDatabase();
    console.log('MongoDB connected successfully');
    
    // Try to count documents in the Contact collection
    const count = await Contact.countDocuments();
    console.log(`Found ${count} documents in Contact collection`);
    
    return NextResponse.json({
      success: true,
      message: 'MongoDB connection successful',
      count: count,
      mongooseConnected: !!mongoose,
      env: {
        hasMongoUri: !!process.env.MONGODB_URI,
        nodeEnv: process.env.NODE_ENV
      }
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
}
