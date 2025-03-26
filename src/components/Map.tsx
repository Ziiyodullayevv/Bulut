import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';

const highlightedCountries = [
  'Kazakhstan',
  'Kyrgyzstan',
  'Tajikistan',
  'Turkmenistan',
];

// 📍 Markerlar uchun koordinatalar
const markers: { name: string; coordinates: [number, number] }[] = [
  { name: 'Kazakhstan', coordinates: [66.9237, 48.0196] }, // 🇰🇿
  { name: 'Kyrgyzstan', coordinates: [74.7661, 41.2044] }, // 🇰🇬
  { name: 'Tajikistan', coordinates: [71.2761, 38.861] }, // 🇹🇯
  { name: 'Turkmenistan', coordinates: [59.5563, 39.1212] }, // 🇹🇲
];

export default function AsiaMap() {
  const [tooltipContent, setTooltipContent] = useState(''); // Tooltip uchun state

  return (
    <>
      <ComposableMap
        projection='geoMercator'
        projectionConfig={{
          center: [90, 40], // Osiyo markaziga moslash
          scale: 350, // Moslashtirilgan zoom
        }}
      >
        {/* 🌍 Osiyo xaritasi */}
        <Geographies geography='/features.json'>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name;
              const isHighlighted = highlightedCountries.includes(countryName);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltipContent(countryName)}
                  onMouseLeave={() => setTooltipContent('')}
                  style={{
                    default: {
                      fill: isHighlighted ? '#6B7CC3' : '#DDDCE1',
                      stroke: '#B6B6C4',
                      outline: 'none',
                    },
                    hover: {
                      fill: isHighlighted ? '#6B7CC3' : '#d6e4fc',
                      stroke: '#3b82f6',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#B6B6C4',
                      stroke: '#3b82f6',
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
            <circle r={5} fill='#C1C6E8' stroke='white' strokeWidth={1.5} />
          </Marker>
        ))}
      </ComposableMap>

      {/* 📝 Tooltip */}
      <Tooltip id='map-tooltip'>{tooltipContent}</Tooltip>
    </>
  );
}
