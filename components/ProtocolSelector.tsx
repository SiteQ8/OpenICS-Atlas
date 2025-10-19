'use client';
import React from 'react';

type Props = {
  protocols: { key: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
};

export default function ProtocolSelector({ protocols, value, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Protocol:</span>
      <select
        className="border rounded-lg px-2 py-1 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {protocols.map(p => (
          <option key={p.key} value={p.key}>{p.label}</option>
        ))}
      </select>
    </div>
  );
}
