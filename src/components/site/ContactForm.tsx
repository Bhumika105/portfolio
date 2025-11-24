"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const noLinks = (val: string) => !/(https?:\/\/|www\.|\.[a-z]{2,})(\S*)/i.test(val);
const schema = z.object({
  message: z
    .string()
    .min(10, "Please enter at least 10 characters")
    .refine(noLinks, "Links are not allowed"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { message: "" },
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(values: FormValues) {
    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setSent(true);
      } else {
        const data = await res.json().catch(() => ({}));
        const msg = data?.error || "Failed to send. Please try again later.";
        form.setError("root", { message: msg });
      }
    } catch (e) {
      form.setError("root", { message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="max-w-xl rounded-md border p-6">
        <h2 className="mb-2 text-2xl font-semibold">Thank you!</h2>
        <p className="text-muted-foreground">Your message has been sent. I’ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl space-y-4">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (no links)</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="How can I help you?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.formState.errors.root?.message ? (
          <p className="text-sm text-destructive">{form.formState.errors.root.message}</p>
        ) : null}
        <Button type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Send message"}
        </Button>
      </form>
    </Form>
  );
}
