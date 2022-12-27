import React from 'react';
import './index.scss'

export default function Loader(): JSX.Element {
    return (
        <div className="spinner">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
        </div>
    )
}