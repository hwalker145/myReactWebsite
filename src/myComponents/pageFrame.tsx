import React from 'react';

interface PageProps {
    child: React.ReactElement;
    id: string;
}

const PageFrame = ( {child, id}: PageProps) => {
    return (
        {child, id}
    )
};
export default PageFrame;

/**
 * 
 * 
 * 
 * 
 * 
 */