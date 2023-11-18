import React, { useEffect, useRef, useState } from 'react';
import Card from '../snippet/card';
import airpods from "../Assets/Images/airpod.png"
import flower from "../Assets/Images/flower.png"
import gittar from "../Assets/Images/gittar.png"
import ticket from "../Assets/Images/ticket.png"
import shoes from "../Assets/Images/shoes.png"
import arrorIcon from "../Assets/Icons/arrow-right-icon.svg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
const cardData = [
    [
        {
            mainHeading: "Beauty gift basket",
        },
        [{
            img: airpods,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "",
            Sale: ""
        },
        {
            img: flower,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "Top pick",
            LowerPrice: "",
            Sale: ""
        },
        {
            img: flower,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "Top pick",
            LowerPrice: "",
            Sale: ""
        },
        {
            img: ticket,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "Lower price",
            Sale: ""
        },
        {
            img: shoes,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "",
            Sale: ""
        },
        {
            img: gittar,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "",
            Sale: "Sale"
        }]


    ],
    [
        {
            mainHeading: "Beauty gift basket",
        },
        [{
            img: airpods,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "",
            Sale: ""
        },
        {
            img: flower,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "Top pick",
            LowerPrice: "",
            Sale: ""
        },
        {
            img: flower,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "Lower price",
            Sale: ""
        },
        {
            img: flower,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "",
            Sale: ""
        },
        {
            img: flower,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "",
            Sale: "Sale"
        }]


    ],
    [
        {
            mainHeading: "Beauty gift basket",
        },
        [{
            img: gittar,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "",
            Sale: ""
        },
        {
            img: flower,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "Top pick",
            LowerPrice: "",
            Sale: ""
        },
        {
            img: ticket,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "Lower price",
            Sale: ""
        },
        {
            img: airpods,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "",
            Sale: ""
        },
        {
            img: shoes,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "",
            Sale: "Sale"
        }]


    ],
    [
        {
            mainHeading: "Beauty gift basket",
        },
        [{
            img: flower,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "",
            Sale: ""
        },
        {
            img: airpods,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "Top pick",
            LowerPrice: "",
            Sale: ""
        },
        {
            img: gittar,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "Lower price",
            Sale: ""
        },
        {
            img: ticket,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "",
            Sale: ""
        },
        {
            img: shoes,
            flower: "1000 and 1 flowers",
            heading: "Beautiful bouquet",
            raiting: "4.6",
            price: "56",
            typeRange: "$100-$200",
            topPick: "",
            LowerPrice: "",
            Sale: "Sale"
        }]


    ]
]


const Slider: React.FC = () => {
    return (
        <>
            {cardData.map((item: any, index) => {
                return (
                    <>
                        <div className="slider_sec" key={index}>
                            <p className='slider_sec_heading'>{index + 1 + "." + item[0].mainHeading}</p>
                            <button className='see_more_btn'>
                                <span>See more</span>
                                <img src={arrorIcon} alt="" />
                            </button>
                        </div>
                        <div className='slider_Sec'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" spaceBetween={12} slidesPerView={5} breakpoints={{
                                375: {
                                    slidesPerView: 1,

                                },
                                640: {
                                    slidesPerView: 2,

                                },
                                768: {
                                    slidesPerView: 3,

                                },
                                1024: {
                                    slidesPerView: 4,

                                },
                            }}>
                                {item[1].map((carddata: any, indexInner: any) => {
                                    return (
                                        <SwiperSlide><Card cardData={carddata} key={indexInner} /></SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>

                    </>
                )
            })}
        </>
    );
};

export default Slider;
