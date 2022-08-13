import React from 'react';

interface PageProps {
    child: React.ReactNode;
}

export const PageFrame = ( {child}: PageProps) => {
    return (
        <body>
            {child}
        </body>
    ) // fixed it
};