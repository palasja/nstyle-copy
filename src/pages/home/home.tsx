import './home.css';
import HomeSlider from '../../components/homeSlider';
import ServiceNavigation from '../../components/serviceNavigation';
import ServicesCost from '../../components/servicesCost';

const Home = () => {
  // const [sliderImageInfo, setSliderImageInfo] = useState<SliderImageProps>(map.get('haidress') as SliderImageProps);
  return (
    <div>
      <HomeSlider />
      <ServiceNavigation />
      <ServicesCost />
    </div>
  );
};

export default Home;
