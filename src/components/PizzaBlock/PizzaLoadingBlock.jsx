import React from "react";

import ContentLoader from "react-content-loader";

const PizzaLoadingBlock = () => {
    return (
        <ContentLoader
            speed={2}
            width={240}
            height={460}
            viewBox="0 0 240 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="120" cy="120" r="120"/>
            <rect x="0" y="265" rx="0" ry="0" width="230" height="30"/>
            <rect x="0" y="310" rx="0" ry="0" width="230" height="63"/>
            <rect x="0" y="390" rx="0" ry="0" width="110" height="45"/>
            <rect x="67" y="411" rx="0" ry="0" width="0" height="7"/>
            <rect x="135" y="390" rx="52" ry="52" width="92" height="45"/>
        </ContentLoader>
    )
}

export default PizzaLoadingBlock;