import { useState, useEffect } from 'react';

const useWindowWidth = () => {

    const [windowWidth, setWindowWidth] = useState();

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowWidth;
}

export default useWindowWidth;