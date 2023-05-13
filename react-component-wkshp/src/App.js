import React from 'react'
import ProfilePhoto from './Profile/ProfilePhoto';
import FullName from './Profile/FullName';
import Address from './Profile/Address';
import './App.css';

const App = () => {
  return (
    <div className='profile'>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  )
}

export default App


  


