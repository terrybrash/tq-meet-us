import * as React from "react";
import { SVGProps } from "react";
export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={34}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M47.902 33.667 43.13 29.59c-1.886 1.338-4.214 2.058-6.525 2.185-8.443.459-13.374-4.172-13.706-12.572-.284-7.283-.268-15.73 8.088-18.208 6.635-1.971 14.162.443 16.238 7.513.915 3.111.883 8.669.6 11.93-.182 2.122-.766 4.204-1.815 6.056l1.885 1.67v5.503h.008Zm-14.604-12.69h6.43l2.47 2.184c.457-.997.702-2.216.765-3.317.126-2.2.126-5.24 0-7.441-.245-4.228-2.422-7.07-6.793-7.323-4.908-.285-7.78 2.05-8.253 6.967-.245 2.596-.308 8.043.473 10.457 1.578 4.853 6.754 5.574 11.007 3.864l-6.107-5.391h.008ZM22.818.79v4.52h-8.94v26.093H8.94V5.309H0V.79h22.818Z"
      />
      <path
        fill="url(#b)"
        d="M90.157.5 96 6.217v8.599L76 33.5 56 14.816v-8.6L61.796.5h8.361L76 6.217 81.891.5h8.266Z"
      />
    </g>
    <defs>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-18.33931 35.47858 -35.88313 -18.54843 91.018 -1.979)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BB69BF" />
        <stop offset={0.154} stopColor="#38AAA7" />
        <stop offset={0.337} stopColor="#41B5C8" />
        <stop offset={0.649} stopColor="#1B59AD" />
        <stop offset={1} />
      </radialGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h96v34H0z" />
      </clipPath>
    </defs>
  </svg>
);
