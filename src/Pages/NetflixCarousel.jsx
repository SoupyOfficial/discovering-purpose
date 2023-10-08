import React, { Component } from 'react';
import Slider from './Components/NetflixSlider'

export default class NetflixCarousel extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="app">
        <Slider>
          {items.map(item => (
            <Slider.Item item={item} key={item.id}/>
          ))}
          <Slider.Item item={{title: 'View All', href:'https://loriwebsite.web.app/research'}}/> 
        </Slider>
      </div>
    );
  }
}