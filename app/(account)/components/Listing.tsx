"use client";

import { ReactNode } from "react";

type Props = { children: ReactNode; name: string; price: number };

export default function Listing({ children, name, price }: Props) {
  return (
    <div className="rounded-lg shadow p-4 flex flex-col h-64">
      <div className="flex items-center justify-center h-[70%]">{children}</div>
      <div className="h-[30%]">
        <p className="text-lg font-semibold mt-2">{name}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-primary">N{price.toFixed(2)}</span>
          <span className="text-gray-500">Smart farm</span>
        </div>
      </div>
    </div>
  );
}
