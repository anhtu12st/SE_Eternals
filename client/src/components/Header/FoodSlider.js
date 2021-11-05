import React from 'react';
import Slider from 'react-slick';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import FoodItem from './FoodItem';
import data from './data';

export default class FoodSlider extends React.Component {
  render() {
    const settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1360,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
          },
        },
        {
          breakpoint: 1040,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };

    return (
      <div className="flex justify-center">
        <button type="button" onClick={() => this.slider.slickPrev()}>
          <GoTriangleLeft className="transform scale-300 opacity-70 hover:opacity-100 mr-5" />
        </button>
        <div className="w-11/12">
          <Slider
            ref={(c) => {
              this.slider = c;
            }}
            arrows={settings.arrows}
            infinite={settings.infinite}
            speed={settings.speed}
            slidesToShow={settings.slidesToShow}
            slidesToScroll={settings.slidesToScroll}
            initialSlide={settings.initialSlide}
            responsive={settings.responsive}
          >
            {data.map(({ id, imgUrl, title }) => (
              <FoodItem key={id} imgUrl={imgUrl} title={title} id={id} />
            ))}
          </Slider>
        </div>
        <button type="button" onClick={() => this.slider.slickNext()}>
          <GoTriangleRight className="transform scale-300 opacity-70 hover:opacity-100 ml-5" />
        </button>
      </div>
    );
  }
}
