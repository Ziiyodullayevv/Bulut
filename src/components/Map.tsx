import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';

// 🌍 Ajratilgan davlatlar ro'yxati
const highlightedCountries = [
  'Kazakhstan',
  'Kyrgyzstan',
  'Tajikistan',
  'Turkmenistan',
];

// 📍 Markerlar uchun koordinatalar (har bir davlatning taxminiy markazi)
const markers: { name: string; coordinates: [number, number] }[] = [
  { name: 'Kazakhstan', coordinates: [66.9237, 48.0196] }, // 🇰🇿 Qozog‘iston
  { name: 'Kyrgyzstan', coordinates: [74.7661, 41.2044] }, // 🇰🇬 Qirg‘iziston
  { name: 'Tajikistan', coordinates: [71.2761, 38.861] }, // 🇹🇯 Tojikiston
  { name: 'Turkmenistan', coordinates: [59.5563, 39.1212] }, // 🇹🇲 Turkmaniston
];

export default function WorldMap() {
  const [tooltipContent, setTooltipContent] = useState(''); // 📝 Tooltip uchun matn holati

  return (
    <>
      <ComposableMap>
        {/* 🌍 Butun dunyo xaritasi */}
        <Geographies geography='/features.json'>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name; // 🌍 Davlat nomini olish
              const isHighlighted = highlightedCountries.includes(countryName); // ✅ Agar davlat ajratilgan bo‘lsa, uni belgilash

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltipContent(countryName)} // 🖱 Davlat ustiga kelsa, tooltip chiqarish
                  onMouseLeave={() => setTooltipContent('')} // ✖ Sichqoncha chiqsa, tooltipni olib tashlash
                  style={{
                    // 🎨 Ranglar
                    default: {
                      fill: isHighlighted ? '#495aa1' : '#DDDCE1', // 🟡
                      stroke: '#B6B6C4',
                      outline: 'none',
                    },
                    hover: {
                      fill: isHighlighted ? '#495aa1' : '#d6e4fc',
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
            {/* 🔴 Qizil nuqta (marker) */}
          </Marker>
        ))}
      </ComposableMap>

      {/* 📝 Tooltip (Davlat nomini ko‘rsatish) */}
      <Tooltip id='map-tooltip'>{tooltipContent}</Tooltip>
    </>
  );
}
