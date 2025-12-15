// src/components/About/Accordion.tsx
'use client';

import React, { useState, ReactNode } from 'react';

interface AccordionItem {
  title: string;
  content: ReactNode;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
            onClick={() => toggleItem(index)}
          >
            <span className="font-semibold text-gray-800">{item.title}</span>
            <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
            <div className="p-4 bg-white">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}