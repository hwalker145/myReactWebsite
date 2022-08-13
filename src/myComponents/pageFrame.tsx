import React from 'react';

interface PageProps {
    child: React.ReactNode;
}

export const PageFrame = (children: PageProps) => {
    return (
        <body>
            {children}
        </body>
    ) // what am I doing wrong?
};