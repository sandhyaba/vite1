import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import './Slider.css'

export default function MultipleItems() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.1.142:6500/v1/user/message/list');
                setUserData(response.data.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        //slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {userData.map((user, index) => (
                    <div className="slide" key={index}>
                        <div className="user_info">
                            <div class="info">
                                <img src={user.image} alt="" />
                                <h3>{user.name}</h3>
                                <h4>{user.address}</h4>
                                <p>{user.message}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

