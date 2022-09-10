import React from 'react';
import { Link } from 'react-router-dom'

export default function Page() {
    return (
        <>
            <h1>Hello World!</h1>
            <Link to="/">Return</Link>
        </>
    );
}
