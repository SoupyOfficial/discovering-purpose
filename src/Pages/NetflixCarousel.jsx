import React, { Component } from 'react';
import Slider from './Components/NetflixSlider'

const movies = [
    {
      id: 1,
      image: '/images/slide1.jpg',
      imageBg: '/images/slide1b.webp',
      title: '1983'
    },
    {
      id: 2,
      image: '/images/slide2.jpg',
      imageBg: '/images/slide2b.webp',
      title: 'Russian doll'
    },
    {
      id: 3,
      image: '/images/slide3.jpg',
      imageBg: '/images/slide3b.webp',
      title: 'The rain',
    },
    {
      id: 4,
      image: '/images/slide4.jpg',
      imageBg: '/images/slide4b.webp',
      title: 'Sex education'
    },
    {
      id: 5,
      image: '/images/slide5.jpg',
      imageBg: '/images/slide5b.webp',
      title: 'Elite'
    },
    {
      id: 6,
      image: '/images/slide6.jpg',
      imageBg: '/images/slide6b.webp',
      title: 'Black mirror'
    }
  ];

export default class NetflixCarousel extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="app">
        <Slider>
          {movies.map(item => (
            <Slider.Item item={item} key={item.id}>{item.content}</Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
}