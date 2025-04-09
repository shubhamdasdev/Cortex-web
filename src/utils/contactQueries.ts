import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';

/**
 * Utility functions for querying contact form submissions
 */

/**
 * Get all contact form submissions
 * @returns Array of all contact submissions
 */
export async function getAllContacts() {
  try {
    await connectToDatabase();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(contacts));
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
}

/**
 * Get a specific contact by ID
 * @param id Contact ID
 * @returns Contact document or null if not found
 */
export async function getContactById(id: string) {
  try {
    await connectToDatabase();
    const contact = await Contact.findById(id);
    return contact ? JSON.parse(JSON.stringify(contact)) : null;
  } catch (error) {
    console.error(`Error fetching contact with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Search contacts by email
 * @param email Email to search for
 * @returns Array of matching contacts
 */
export async function searchContactsByEmail(email: string) {
  try {
    await connectToDatabase();
    const contacts = await Contact.find({ 
      email: { $regex: email, $options: 'i' } 
    }).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(contacts));
  } catch (error) {
    console.error(`Error searching contacts by email ${email}:`, error);
    throw error;
  }
}

/**
 * Search contacts by company name
 * @param company Company name to search for
 * @returns Array of matching contacts
 */
export async function searchContactsByCompany(company: string) {
  try {
    await connectToDatabase();
    const contacts = await Contact.find({ 
      company: { $regex: company, $options: 'i' } 
    }).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(contacts));
  } catch (error) {
    console.error(`Error searching contacts by company ${company}:`, error);
    throw error;
  }
}

/**
 * Get contacts created within a date range
 * @param startDate Start date
 * @param endDate End date
 * @returns Array of contacts within the date range
 */
export async function getContactsByDateRange(startDate: Date, endDate: Date) {
  try {
    await connectToDatabase();
    const contacts = await Contact.find({
      createdAt: {
        $gte: startDate,
        $lte: endDate
      }
    }).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(contacts));
  } catch (error) {
    console.error('Error fetching contacts by date range:', error);
    throw error;
  }
}

/**
 * Get the most recent contacts
 * @param limit Number of contacts to retrieve
 * @returns Array of most recent contacts
 */
export async function getRecentContacts(limit = 10) {
  try {
    await connectToDatabase();
    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .limit(limit);
    return JSON.parse(JSON.stringify(contacts));
  } catch (error) {
    console.error('Error fetching recent contacts:', error);
    throw error;
  }
}

/**
 * Delete a contact by ID
 * @param id Contact ID to delete
 * @returns Deletion result
 */
export async function deleteContact(id: string) {
  try {
    await connectToDatabase();
    const result = await Contact.findByIdAndDelete(id);
    return result;
  } catch (error) {
    console.error(`Error deleting contact with ID ${id}:`, error);
    throw error;
  }
}
