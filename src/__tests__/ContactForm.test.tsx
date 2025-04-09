import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ContactPage from '@/app/contact/page';

// Mock the global fetch function
global.fetch = jest.fn();

// Reset mocks between tests
beforeEach(() => {
  jest.resetAllMocks();
});

describe('Contact Form', () => {
  test('renders the contact form correctly', () => {
    render(<ContactPage />);
    
    // Check if important elements are rendered
    expect(screen.getByText('Contact Sales')).toBeInTheDocument();
    expect(screen.getByText('Get in touch')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Company')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('validates required fields', async () => {
    render(<ContactPage />);
    
    // Click submit without filling in any fields
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    
    // Check if HTML5 validation prevents submission
    // Note: This relies on the required attribute in the form fields
    await waitFor(() => {
      // The form should still be visible, not the thank you message
      expect(screen.getByText('Get in touch')).toBeInTheDocument();
      expect(screen.queryByText('Thank you!')).not.toBeInTheDocument();
    });
  });

  test('submits the form with valid data', async () => {
    // Create a delayed mock response to give us time to check the submitting state
    const mockFetch = jest.fn().mockImplementation(() => {
      return new Promise(resolve => {
        // Delay the response to ensure we can check the submitting state
        setTimeout(() => {
          resolve({
            ok: true,
            status: 201,
            json: async () => ({ success: true, data: {} })
          });
        }, 100);
      });
    });
    
    // Replace the global fetch with our delayed mock
    global.fetch = mockFetch;
    
    const user = userEvent.setup();
    render(<ContactPage />);
    
    // Fill in the form
    await user.type(screen.getByLabelText('Name'), 'John Doe');
    await user.type(screen.getByLabelText('Email'), 'john@example.com');
    await user.type(screen.getByLabelText('Company'), 'Acme Corp');
    await user.type(screen.getByLabelText('Message'), 'This is a test message');
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await user.click(submitButton);
    
    // Verify fetch was called with correct data
    expect(mockFetch).toHaveBeenCalledWith('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Acme Corp',
        message: 'This is a test message'
      }),
    });
    
    // Wait for the submission to complete and check if the thank you message is shown
    await waitFor(() => {
      expect(screen.getByText('Thank you!')).toBeInTheDocument();
      expect(screen.getByText("We've received your message and will get back to you shortly.")).toBeInTheDocument();
    }, { timeout: 1000 });
  });

  test('handles API errors', async () => {
    // Mock fetch to return an error response
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ error: 'Server error' })
    });
    
    const user = userEvent.setup();
    // Mock window.alert
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    render(<ContactPage />);
    
    // Fill in the form
    await user.type(screen.getByLabelText('Name'), 'Jane Smith');
    await user.type(screen.getByLabelText('Email'), 'jane@example.com');
    await user.type(screen.getByLabelText('Company'), 'XYZ Inc');
    await user.type(screen.getByLabelText('Message'), 'Another test message');
    
    // Submit the form
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    
    // Check if the alert is shown
    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('Failed to submit form. Please try again later.');
    });
    
    // The form should still be visible, not the thank you message
    expect(screen.queryByText('Thank you!')).not.toBeInTheDocument();
    expect(screen.getByText('Get in touch')).toBeInTheDocument();
    
    // Clean up
    alertMock.mockRestore();
  });
});
