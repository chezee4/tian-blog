export default function ProgressCircle() {
  return (
    <div className="relative w-[220px] h-[220px]">
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
        <circle
          className=""
          strokeWidth="13"
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
          <stop offset="0" stopColor="#FEE140"></stop>
          <stop offset="1" stopColor="#FA709A"></stop>
        </linearGradient>
        <circle
          className="   progress-ring__circle stroke-current"
          strokeWidth="13"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          stroke="url(#20055f5c)"
          strokeDashoffset="calc(400 - (510 * 45) / 100)"
        ></circle>

        <text
          x="50"
          y="50"
          fontFamily="Verdana"
          fontSize="15"
          fontWeight={600}
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="#fff"
          className="dark:fill-white fill-mainGray"
        >
          97%
        </text>
      </svg>
    </div>
  );
}
