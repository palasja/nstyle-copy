import { useEffect, useState } from 'react';
import './home.css';
import HomeSlider from '../../components/homeSlider';
import ServiceNavigation from '../../components/serviceNavigation';

const Home = () => {
  useEffect(() => {
    let i = 1;
    showSlide(i);
    const interval = setInterval(() => {
      i === 4 ? i = 1 : i++;
      showSlide(i);
    }, 5000);
    return () => clearInterval(interval);
  });


  const showSlide  = (num: number) => {
    //remove previous active slide
    const activeSlide = document.getElementsByClassName('slider-panel__active');
    if( activeSlide.length !== 0){
      activeSlide[0].classList.remove('slider-panel__active');
      document.getElementsByClassName('slider_text__active')[0].classList.remove('slider_text__active');
    }

    //add new active slide
    const el = document.getElementsByClassName('slider-panel')[num];
    el.classList.add('slider-panel__active');
    el.getElementsByClassName('slider_text')[0].classList.add('slider_text__active');
  }
  // const [sliderImageInfo, setSliderImageInfo] = useState<SliderImageProps>(map.get('haidress') as SliderImageProps);
  return (
    <div>
      <HomeSlider />
      <ServiceNavigation />
    </div>
  );
};

export default Home;
