import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../assets/home/01.png';
import img2 from '../../assets/home/02.png';
import img3 from '../../assets/home/03.png';



const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            
        </Carousel>
    );
};

export default Banner;