import React , { useState }from 'react'
import './Hero.css'
import Arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
 
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h4> We ensure better education for a better world.</h4>
        <p>Corporate entities are everywhere in today’s society. People see them on television, on the internet,
          on their way to work, and on their way to school.
        {expanded && (
          <>
            {' '} Advertisements invade individuals’ lives almost everywhere, but schools have been a safe haven from this – at least they were.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum dolor at velit convallis vestibulum.Integer nec tortor id urna sagittis euismod nec ac ipsum. In hac habitasse platea dictumst.
          </>
        )}
        </p>
          <button className='read-btn' onClick={handleToggle}> Read More<img src={Arrow} alt="arrow" className='arrow-img' /></button>   
      </div>
    </div>
  )
}

export default Hero
