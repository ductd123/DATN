import Carousel from 'react-bootstrap/Carousel';
import '../Layout/Layout.scss'
function HomePage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="homeSlide w-100"
          src="https://nld.mediacdn.vn/2021/2/14/img9367-1613271930669536352799.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="homeSlide w-100"
          src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/9/2/img20210902122945-1630565378614794477466.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="homeSlide w-100"
          src="https://www.baotravinh.vn/uploads/thuvienanh/2022/04/20/074700820.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePage;