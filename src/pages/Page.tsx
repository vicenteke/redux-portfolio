import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function Page() {
    const navigate = useNavigate()

    useEffect(() => {
        // Anything in here is fired on component mount.
        const handleKeyDown = (event: KeyboardEvent) => {
            const keyName = event.key
            switch (keyName) { 
                case 'Escape':
                    navigate('/')
                    break
                default: break
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            // Anything in here is fired on component unmount.
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    return (
        <>
            <h1>Hello World!</h1>
            <Link to="/">Return</Link>
        </>
    );
}
