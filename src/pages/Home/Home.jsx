import React from 'react'
import './Home'
import './Home.css'
import TypingEffect from '../../components/TypingEffect/TypinkEffect.jsx'

const Home = () => {
  return (
    <div className='home'>
      <div className="hero">
        <h1 className='heading'>
        <TypingEffect text={"Latest Crypto Marketprice !"} speed={100} />
        </h1>
        <p>Welcome to the world's largest cryptocurrency marketplace <br /> Sign up to explor more about crypto.</p> 
        <form >
          <input type="text"placeholder='Search Crypto...'/>
          <button type='Submit'>Search</button>
        </form>
      </div>
    </div>
  )
}
export default Home
