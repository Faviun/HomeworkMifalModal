import React from "react";

const TopCircle = () => {
    return (
        <div>
            <svg
                className="rounded-tl-[15px]  lg:w-[130px] lg:h-[121px] md:w-[70px] md:h-[67px] sm:w-[60px] sm:h-[55px]"
                width="60"
                height="55"
                viewBox="0 0 130 121"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_91_156)">
                    <circle
                        cx="73"
                        cy="73"
                        r="73"
                        transform="matrix(-1 0 0 1 115 -40)"
                        fill="#FFE25B"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_91_156"
                        x="-46"
                        y="-55"
                        width="176"
                        height="176"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="7.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.06875 0 0 0 0 0.247295 0 0 0 0 0.275 0 0 0 0.1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_91_156"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_91_156"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default TopCircle;
