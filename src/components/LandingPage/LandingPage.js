import React from 'react';
import './LandingPage.css'

export default function LandingPage(){
    return (
        <div className='pagecontainer'>
            <div className='images'>
                <img id="logo" src="https://s3.amazonaws.com/freebiesupply/large/2x/instagram-logo-white-on-black.png" alt="Logo" />
                <img id="insta" src="https://i1.wp.com/www.christinasandsengen.com/wp-content/uploads/2014/09/instagram-logo-black-on-white.png?fit=978%2C373" alt="Insta" />
            </div>
            <div className='right'>
                <div className='content'>
                    <img id="textlogo" src="https://th.bing.com/th/id/R.f9f07a203874e68dd521ff8f8b12d0b7?rik=nkW9VLhi6N1u%2bg&riu=http%3a%2f%2fwww.dafont.com%2fforum%2fattach%2forig%2f1%2f6%2f161556.gif&ehk=i9F6ZzuksZ6ldEoTXZrj3Iy2Sjm%2fCpmPRzIBrByTJ84%3d&risl=&pid=ImgRaw&r=0" alt="textLogo" />
                   <input id="idnum" type="text" placeholder='Phone number, username or email' />
                   <input id="password" type="text" placeholder='Password'/>
                   <a id="login" href="/Postview">Log In</a>
                </div>
            </div>
        </div>
    )
}