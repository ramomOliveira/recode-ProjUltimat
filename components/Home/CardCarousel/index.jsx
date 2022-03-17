import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

import { Container, WrapperCover } from './style';

const arrayCover = [
  {
    img: "/images/carousel/car1.jpg",
  },
  {
    img: "/images/carousel/car2.jpg",
  },
  {
    img: "/images/carousel/car3.jpg",
  },
  {
    img: "/images/carousel/car4.jpg",
  },
  {
    img: "/images/carousel/car5.jpg",
  },
]

const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

export default function CardCarousel() {
  return (
    <Carousel defaultWait={3000}>
      {arrayCover.map((item) => (
        <Slide right>
          <WrapperCover img={item.img} />

        </Slide>
      ))}

    </Carousel>
  )
}