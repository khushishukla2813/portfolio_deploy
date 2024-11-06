import { useEffect } from 'react'
import Typed from 'typed.js'

function Role() {

    const roles = [
        // '<span style="color:#bebff6">Full Stack Developer</span>',
        // '<span style="color:#d68888">Blockchain Developer</span>',
        // '<span style="color:#79f0fc">Open Source Enthusiast</span>',
        // '<span style="color:#d8e9cd">Technical Content Writer</span>',
        '<span style="color:#bebff6">AI & ML Innovator</span>',
        '<span style="color:#d68888">| Full Stack Developer</span>',
        '<span style="color:#79f0fc">| Tech Community Leader</span>',
        '<span style="color:#d8e9cd">| Technical Content Writer</span>',
        '<span style="color:#f0d79b">| UI/UX Design Enthusiast</span>',
        '<span style="color:#f0a1a8">| Cloud Computing Advocate</span>',
        '<span style="color:#c3e88d">| Hackathon Enthusiast</span>', 
        '<span style="color:#b3a9e3">| Innovative Problem Solver</span>',
        '<span style="color:#a3e9f2">| Digital Transformation Catalyst</span>',

    ]

    useEffect(() => {
        const options = {
            strings: roles,
            typeSpeed: 100,
            backSpeed: 70,
            loop: true,
            cursorChar: "|",
        };
        let typed = new Typed('#role', options);
    }, [])

    return (<span id="role"></span>)
}

export default Role
