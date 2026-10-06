import React from 'react'

export default function BrandLogo({ size = 32, title = 'Kukukiku Messages' }) {
    return (
        <svg
            viewBox='0 0 64 64'
            width={size}
            height={size}
            role='img'
            aria-label={title}
        >
            <title>{title}</title>
            <rect x='2' y='2' width='60' height='60' rx='17' fill='#ffffff' />
            <text
                x='32'
                y='33'
                textAnchor='middle'
                dominantBaseline='central'
                fill='var(--kk-primary)'
                fontFamily='Inter, system-ui, sans-serif'
                fontSize='27'
                fontWeight='700'
                letterSpacing='-1.5'
            >
                KM
            </text>
        </svg>
    )
}
