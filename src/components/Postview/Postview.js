import React, { useEffect, useState } from 'react';
import camicon from './cameraicon.png';
// import tenx from './10xacademy.png';
// import bixby from './Bixby_Bridge_Panorama.jpg';
// import swiss from './swiss.jpg';
import heart from './heart.png';
import send from './send.png';
import './Postview.css'

export default function Postview(){
    const [users,setUsers]=useState()
    
    const data= async () => {
        const response=await fetch("http://localhost:3004/user").then(response=> response.json());
        setUsers(response)
    }

    useEffect(() =>{
        data()
    },[])

    return  (
        <div className="site-container">
          <header className='header'>
            <div className='instaclone'>
              <img className='instaicon' src="https://th.bing.com/th/id/R.f9f07a203874e68dd521ff8f8b12d0b7?rik=nkW9VLhi6N1u%2bg&riu=http%3a%2f%2fwww.dafont.com%2fforum%2fattach%2forig%2f1%2f6%2f161556.gif&ehk=i9F6ZzuksZ6ldEoTXZrj3Iy2Sjm%2fCpmPRzIBrByTJ84%3d&risl=&pid=ImgRaw&r=0" alt="insta"/>
            </div>
            <button className='cameraicon' ><img className='cameraiconimg' src={camicon} alt="cam"/></button>
          </header>
          <div className='body'>
          {users && users.map((user)=>(
            <div className='post'>
              <div className='posthead'>
                <div className='postuser'>
                  <p className='username'>{user.name}</p>
                  <p className='userplace'>{user.location}</p>
                </div>
                <button className='postmenu'>...</button>
              </div>
              <img className='postimage' src={user.PostImage} alt="post" />
              <div className='posticons'>
                <img className='like' src={heart} alt="like icon"/>
                <img className='share' src={send} alt="share icon"/>
                <p className='date'>{user.date}</p>
              </div>
              <div className='postdescr'>
                <p className='numlike'>{user.likes} likes</p>
                <p className='descr'>{user.description}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      );
} 