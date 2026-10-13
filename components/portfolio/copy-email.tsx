"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface CopyEmailProps {
  email: string;
}

function CopyEmail({ email }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button asChild size="lg">
        <a href={`mailto:${email}`}>
          <Mail className="size-4" />
          Email Diogo
        </a>
      </Button>
      <Button
        aria-label={`Copy ${email}`}
        onClick={handleCopy}
        size="lg"
        variant="outline"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        {copied ? "Copied" : "Copy email"}
      </Button>
    </div>
  );
}

export { CopyEmail };
