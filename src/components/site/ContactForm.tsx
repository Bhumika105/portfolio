"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import emailjs from '@emailjs/browser';

const noLinks = (val: string) => !/(https?:\/\/|www\.|\.[a-z]{2,})(\S*)/i.test(val);
const schema = z.object({
  name: z.string().max(100).optional(),
  email: z.string().email("Please enter a valid email"),
  message: z
    .string()
    .min(10, "Please enter at least 10 characters")
    .refine(noLinks, "Links are not allowed"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const sendEmail = async (values: FormValues) => {
    try {
      setSubmitting(true);
      
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS configuration is missing');
      }

      // const templateParams = {
      //   from_name: values.name || 'Anonymous',
      //   from_email: values.email,
      //   message: values.message,
      // };
      const templateParams = {
        from_name: values.name || 'Anonymous',
        from_email: values.email,
        message: values.message,
        date: new Date().toLocaleString(),
        to_email: 'nautiyalb68@gmail.com, densteph1771@gmail.com' // Add this line
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      form.setError("root", { 
        message: "Failed to send message. Please try again later." 
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="max-w-xl rounded-md border p-6">
        <h2 className="mb-2 text-2xl font-semibold">Thank you!</h2>
        <p className="text-muted-foreground">Your message has been sent. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(sendEmail)} className="max-w-xl space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="you@example.com" 
                  type="email" 
                  required 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (no links)</FormLabel>
              <FormControl>
                <Textarea 
                  rows={5} 
                  placeholder="How can I help you?" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.formState.errors.root && (
          <p className="text-sm font-medium text-destructive">
            {form.formState.errors.root.message}
          </p>
        )}
        <Button type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}