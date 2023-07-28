import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className='content'>
            <h2>Join Our Defi Community</h2>
            <form action="https://getform.io/f/2d3f0e8e-e540-4b5a-af58-d9ef9f4da07c" method='POST'> 
                <div className='form-container display-col'>
                    <input type="email" name='email' placeholder='Enter your email' />
                    <button className='btn'>Sign Up</button>
                </div>
                <div className='form-container'>
                    <input type="checkbox" /> <p>Yes, I agree to receive email communications from DeFi.</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe
