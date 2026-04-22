/*
File: NotFound.jsx
Description: Not found page component
Student: Thomas McLean
Student Number: 100818706
Date: 2026-04-21
*/

import React from "react"
import { Link } from "react-router-dom"

export default function NotFound(){
    return(
        <div className="text-center p-5">
            <h2>404 - Not Found</h2>
            <p className="text-muted">The page you requested does not exist.</p>
            <Link to="/" className="btn btn-primary mt-3">Go Home</Link>
        </div>
    )
}