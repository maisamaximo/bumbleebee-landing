import React from 'react'
export default function BeeIcon({size=18}){
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none" stroke="#EFAC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="13" rx="7" ry="5"/>
        <path d="M9 8c0-2 1.5-3 3-3s3 1 3 3"/>
        <path d="M5 13h14M12 8v10"/>
        <path d="M4 7l2 2M20 7l-2 2"/>
      </g>
    </svg>
  )
}
