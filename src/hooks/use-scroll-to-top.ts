import { useEffect } from 'react';

/**
 * Custom hook that scrolls to the top of the page when the component mounts
 */
export const useScrollToTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
};
