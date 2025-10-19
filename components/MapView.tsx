'use client';
import React, { useMemo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

type Exposure = Record<string, number>;

export default function MapView({ exposure }: { exposure: Exposure }) {
  const max = useMemo(() => Math.max(1, ...Object.values(exposure)), [exposure]);
  const scale = (val: number) => {
    // simple 0..1 scale
    return val <= 0 ? 0 : Math.min(1, val / max);
  };

  return (
    <div className="card">
      <ComposableMap projectionConfig={{ scale: 155 }}>
        <Geographies geography="/data/demo/world-110m.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              const iso = (geo.properties as any).ISO_A2; // 2-letter
              const val = exposure[iso] || 0;
              const t = scale(val);
              const fill = `rgba(30, 136, 229, ${0.15 + 0.75 * t})`;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={val ? fill : "#F3F4F6"}
                  stroke="#fff"
                  strokeWidth={0.5}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <div className="mt-3 text-xs text-gray-600">
        Darker blue indicates higher aggregated counts. (Demo data when offline.)
      </div>
    </div>
  );
}
