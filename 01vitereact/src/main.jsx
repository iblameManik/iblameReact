import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://www.google.com',
//         target : '_blank',
//     },
//     children: 'Click me to visit Google'
// }

const anotherElement = (
    <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const anotherUser = 'Inosuke';

const reactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    'click to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(

    <App />
 
)
