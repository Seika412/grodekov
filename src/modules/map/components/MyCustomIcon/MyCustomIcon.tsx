import "./style.css"
import L from "leaflet"


export function MyCustomIcon() {
  const myCustomIcon = L.divIcon({
    className: "custom-you-are-here",
    html: `
    <div class="you-are-here-marker">
      <svg width="160" height="110" viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="118" cy="48" r="42" fill="#64748B" fill-opacity="0.18"/>
        <circle cx="118" cy="48" r="19" fill="#1E2937" stroke="#F8FAFC" stroke-width="6"/>
      </svg>
      
      <div class="pulse-ring"></div>
    </div>
  `,
    iconSize: [50, 50],
    iconAnchor: [37, 90],
    popupAnchor: [0, 0],
  });

  return myCustomIcon

}