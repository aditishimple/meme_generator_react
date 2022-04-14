import React from 'react'
import Images from '../Images/troll-face.png'

const Header = () => {
  return (
    <header className="header">
        <img src={Images} alt={"Troll-Face"} className="header--image"/>
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course Project</h4>
    </header>
  )
}

export default Header
