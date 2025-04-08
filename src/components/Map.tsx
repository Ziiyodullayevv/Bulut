import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';

// 🗺️ Har bir davlat uchun alohida rang
const countryColors: Record<string, string> = {
  Kazakhstan: '#6173b9',
  Kyrgyzstan: '#6173b9',
  Tajikistan: '#6173b9',
  Turkmenistan: '#6173b9',
  Uzbekistan: '#369fee', // 🇺🇿 alohida ko‘k rang
};

// 📍 Markerlar
const markers: { name: string; coordinates: [number, number] }[] = [
  { name: 'Kazakhstan', coordinates: [66.9237, 48.0196] },
  { name: 'Kyrgyzstan', coordinates: [74.7661, 41.2044] },
  { name: 'Tajikistan', coordinates: [71.2761, 38.861] },
  { name: 'Turkmenistan', coordinates: [59.5563, 39.1212] },
  { name: 'Uzbekistan', coordinates: [64.5853, 41.3775] },
];

export default function AsiaMap() {
  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <>
      <ComposableMap
        style={{
          marginLeft: '3%',
          marginTop: '-20%',
          width: '100%',
        }}
        projection='geoMercator'
        projectionConfig={{
          scale: 360,
          center: [90, 40],
        }}
      >
        {/* 🌍 Osiyo xaritasi */}
        <Geographies geography='/asia.json'>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name;
              const fillColor = countryColors[countryName] || '#DDDCE1';

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltipContent(countryName)}
                  onMouseLeave={() => setTooltipContent('')}
                  style={{
                    default: {
                      fill: fillColor,
                      stroke: '#686767',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#d6e4fc',
                      stroke: '#3b82f6',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#B6B6C4',
                      stroke: '#6173b9',
                      outline: 'none',
                    },
                  }}
                  data-tooltip-id='map-tooltip'
                />
              );
            })
          }
        </Geographies>

        {/* 📍 Markerlar */}
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <text fill='#141414' fontWeight={700} fontSize={10}>
              {name}
            </text>
            <circle r={4} fill='#C9C9F9' stroke='white' strokeWidth={1.5} />
          </Marker>
        ))}
      </ComposableMap>

      {/* 📝 Tooltip */}
      <Tooltip id='map-tooltip'>{tooltipContent}</Tooltip>
    </>
  );
}
