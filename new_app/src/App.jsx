import { useState } from 'react'
import './App.css'
import Card from './Card/Card'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <div style={{display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px"}}>
      <Card imgSrc="https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg"/>
      <Card imgSrc="https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg"/>
      <Card imgSrc="https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg"/>
      <Card imgSrc="https://plus.unsplash.com/premium_photo-1686729237226-0f2edb1e8970?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyfGVufDB8fDB8fHww"/>
    </div>
    </>
  )
}

export default App
