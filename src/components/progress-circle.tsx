import React from 'react'

export default function ProgressCircle() {
  return (
    <div className="relative w-52 h-52">
    <svg className="w-full h-full " viewBox="0 0 100 100" fill="none">
      <circle
        className=""
        stroke-width="13"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
      ></circle>
      <linearGradient
        id="20055f5c"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#FEE140"></stop>
        <stop offset="1" stop-color="#FA709A"></stop>
      </linearGradient>
      <circle
        className="   progress-ring__circle stroke-current"
        stroke-width="13"
        stroke-linecap="round"
        cx="50"
        cy="50"
        r="40"
        stroke="url(#20055f5c)"
        stroke-dashoffset="calc(400 - (510 * 45) / 100)"
      ></circle>

      <text
        x="50"
        y="50"
        font-family="Verdana"
        font-size="15"
        fontWeight={600}
        text-anchor="middle"
        alignment-baseline="middle"
        fill="#141414"
      >
        97%
      </text>
    </svg>
  </div>
  )
}
