import React from "react";

const EmptyTableIcon = ({
                          className,
                          colors = "",
                        }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 50 35.91"
      className={className}
    >
      <g>
        <path fill={colors || "currentColor"} d="M5.07,16.53C4.21,7.52,2.91,0.11,2.89,0L0,0.5c0.03,0.17,2.93,16.88,2.93,30.51h2.93
		c0-2.86-0.13-5.84-0.32-8.79h9.21v8.79h2.93c0-4.17,0-12.02,0-11.72c0-2.68-1.77-2.93-4.42-2.93l-5.72,0
		C6.6,16.37,5.77,16.39,5.07,16.53L5.07,16.53z"/>
        <path fill={colors || "currentColor"}
              d="M23.54,28.08h-2.93v2.93h8.79v-2.93h-2.93V10.5h11.72V4.64H11.82v5.86h11.72V28.08z"/>
        <path fill={colors || "currentColor"} d="M50,0.5L47.11,0c-0.02,0.11-1.32,7.52-2.19,16.53c-0.7-0.14-1.53-0.16-2.47-0.16l-5.72,0
		c-2.65,0-4.42,0.25-4.42,2.93c0,0.55,0,12.48,0,11.72h2.93v-8.79h9.21c-0.2,2.95-0.32,5.93-0.32,8.79h2.93
		C47.07,17.38,49.97,0.67,50,0.5L50,0.5z"/>
      </g>
    </svg>
  )

}

export default EmptyTableIcon;
