"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type FormData = z.infer<typeof schema>;

interface NewsletterProps {
  variant?: "default" | "footer";
  className?: string;
}

export function Newsletter({ variant = "default", className }: NewsletterProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  const isFooter = variant === "footer";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("mt-4", className)}
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          placeholder="Your email address"
          {...register("email")}
          className={cn(
            isFooter && "border-white/20 bg-white/10 text-white placeholder:text-white/50"
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting || submitted}
          className={cn(
            "shrink-0",
            isFooter
              ? "bg-gold text-forest hover:bg-gold-light"
              : "bg-forest hover:bg-forest-light dark:bg-gold dark:text-forest"
          )}
        >
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" />
          ) : submitted ? (
            "Subscribed!"
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>
      {errors.email && (
        <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
      )}
    </form>
  );
}
