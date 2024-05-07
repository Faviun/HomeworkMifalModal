import React from "react";

const RightCircle = () => {
    return (
        <div>
            <svg
                className="lg:w-[75px] lg:h-[150px] md:w-[60] md:h-[120] sm:w-[40] sm:h-[80]"
                width="40"
                height="80"
                viewBox="0 0 75 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_91_155)">
                    <circle
                        cx="60"
                        cy="60"
                        r="60"
                        transform="matrix(-1 0 0 1 135 15)"
                        fill="#FFE25B"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_91_155"
                        x="0"
                        y="0"
                        width="150"
                        height="150"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
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
                            result="effect1_dropShadow_91_155"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_91_155"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default RightCircle;
