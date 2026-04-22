/*
File: main.jsx
Description: Main entry point for the React application
Student: Thomas McLean
Student Number: 100818706
Date: 2026-04-21
*/
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>)