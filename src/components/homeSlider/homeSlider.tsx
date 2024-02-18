import { useEffect } from 'react';
import SliderImage from '../../components/sliderImage';
import './homeSlider.css';
import { SliderImageProps } from '../../type/costType';
import { homeSlidesInfo } from '../../assets/items';

const HomeSlider = () => {
  useEffect(() => {
    let i = 1;
    showSlide(i);
    const interval = setInterval(() => {
      i === 4 ? (i = 1) : i++;
      showSlide(i);
    }, 5000);
    return () => clearInterval(interval);
  });

  const showSlide = (num: number) => {
    //remove previous active slide
    const activeSlide = document.getElementsByClassName('slider-panel__active');
    if (activeSlide.length !== 0) {
      activeSlide[0].classList.remove('slider-panel__active');
      document
        .getElementsByClassName('slider_text__active')[0]
        .classList.remove('slider_text__active');
        
    }

    //add new active slide
    const el = document.getElementsByClassName('slider-panel')[num];
    el.classList.add('slider-panel__active');
    el.getElementsByClassName('slider_text')[0].classList.add('slider_text__active');
  };
  // const [sliderImageInfo, setSliderImageInfo] = useState<SliderImageProps>(map.get('haidress') as SliderImageProps);
  return (
    <div>
      <div className="slider">
        <SliderImage {...{ link: '', serviceName: '', img: '' }} />
        <SliderImage {...(homeSlidesInfo.get('haidress') as SliderImageProps)} />
        <SliderImage {...(homeSlidesInfo.get('eyebrows') as SliderImageProps)} />
        <SliderImage {...(homeSlidesInfo.get('cosmetic') as SliderImageProps)} />
        <SliderImage {...(homeSlidesInfo.get('manicure') as SliderImageProps)} />
      </div>
      <div className="buttons-panel">
        <div onClick={() => showSlide(1)} className="change-image_container">
          <span className="change-image"></span>
        </div>
        <div onClick={() => showSlide(2)} className="change-image_container">
          <span className="change-image"></span>
        </div>
        <div onClick={() => showSlide(3)} className="change-image_container">
          <span className="change-image"></span>
        </div>
        <div onClick={() => showSlide(4)} className="change-image_container">
          <span className="change-image"></span>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
