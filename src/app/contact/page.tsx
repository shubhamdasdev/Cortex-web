"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }

      // Form submitted successfully
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form state
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      // You could add error state handling here
      alert('Failed to submit form. Please try again later.');
    }
  };

  return (
    <div className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-serif md:text-5xl lg:text-6xl">Book A Demo</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Get in touch with our team to learn more about how Cortex can help your organization.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-serif mb-3">Ready to transform your financial workflows?</h2>
              <p className="text-muted-foreground">
                Our team is ready to help you understand how Cortex can integrate into your existing processes and help you achieve more with less effort.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">Enterprise Solutions</h3>
              <p className="text-muted-foreground">
                We offer custom solutions for enterprise clients. Our team can help you with implementation, training, and ongoing support.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">Security First</h3>
              <p className="text-muted-foreground">
                We take security seriously. All our solutions are built with enterprise-grade security in mind, ensuring your data is always protected.
              </p>
            </div>
          </div>
          <Card className="bg-muted/30 border-muted">
            {isSubmitted ? (
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[400px]">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-serif">Thank you!</h3>
                  <p className="text-muted-foreground">
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              </CardContent>
            ) : (
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Get in touch</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Your email address"
                      required
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      required
                      value={formState.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      required
                      value={formState.message}
                      onChange={handleChange}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-background"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </CardFooter>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
