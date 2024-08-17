import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'


const SidePanel_admin = () => {
    const [text] = useTypewriter({
        words: ['Developer', 'Designer', 'Student', 'Intern'],
        loop: true, // Set loop to true to enable looping
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    
    return (
        <h1 style={{margin: '50px'}}>
            I'm a {' '}
            <span style={{ fontWeight: 'bold', color: 'green' }}>  {text} </span>
            <span style={{color: 'red'}}>
                <Cursor cursorStyle='|'/>
            </span>
        </h1>
    );
}

export default SidePanel_admin;
