import { useState, useEffect } from 'react';

const useDeviceType = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const updateDeviceType = () => {
        setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', updateDeviceType);
        updateDeviceType();

        return () => {
        window.removeEventListener('resize', updateDeviceType);
        };
    }, []);

    return isMobile;
};

export default useDeviceType;
