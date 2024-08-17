import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoStar } from "react-icons/io5"; // Import IoStar from react-icons/io5

const reviews = [
    {
        name: 'Jon Doe',
        img: 'https://via.placeholder.com/150',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 4
    },
    {
        name: 'Smith Jane',
        img: 'https://via.placeholder.com/150',
        review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: 5
    },
    {
        name: 'Huston Patrick',
        img: 'https://via.placeholder.com/150',
        review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        rating: 3
    },
    {
        name: 'Jane Watson',
        img: 'https://via.placeholder.com/150',
        review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        rating: 4
    }
];

const ReviewsCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">User Reviews</h2>
            <Slider {...settings}>
                {reviews.map((item, index) => (
                    <div key={index} className="px-3">
                        <div className="card shadow-sm h-100 text-center" style={{ borderRadius: '20px', backgroundColor: 'white' }}>
                            <img 
                                src={item.img} 
                                className="card-img-top rounded-circle mx-auto mt-3" 
                                alt={item.name} 
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-dark">{item.name}</h5>
                                <p className="card-text text-dark">{item.review}</p>
                                <div className="star-rating">
                                    {[...Array(5)].map((star, i) => (
                                        <IoStar
                                            key={i}
                                            color={i < item.rating ? '#ffc107' : '#e4e5e9'}
                                            size={20}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ReviewsCarousel;
