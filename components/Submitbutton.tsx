"use client";

import { useFormStatus } from "react-dom";

type Props = {
  text: string;
  className?: string;
};

export function SubmitButton({ className = "", text }: Props) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className={className}>
      {pending ? "Loading..." : text}
    </button>
  );
}
