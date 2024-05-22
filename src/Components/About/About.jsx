import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className="left-side">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='paly-icon' />
            </div>
            <div className="right-side">
                <h4>About University</h4>
                <h2>Nuturishing Tommorrow's Leaders Today </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.</p>
                    <br></br>
                <p>Banning advertisements directed towards children is an extreme.
                    The content in which they are advertising plays a really big part kids choices in food and lifestyles.
                    Advertising healthy eating habits to kids would not only increase a healthy lifestyle for the kids,
                    but also could influence the parents to change their eating habits aswell.…</p>
                    <br></br>
                <p>
                    Some of the positives of having sponsorships is that it can teach students about the economy.
                    Due to the fact that these schools are advertising a product,
                    students are more likely to go and buy such product.
                </p>

            </div>
        </div>
    )
}

export default About
