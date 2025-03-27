import { Component } from "react";
import { BiBrain } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

class Intro extends Component {
  render() {
    return (
      <div className="services__intro">
        <div className="pos-rel">
          <div className="services__intro__image">
            <img
              src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="IT Solutions"
            />
          </div>
          <Swiper
            className="services__intro__miniSlider"
            spaceBetween={30}
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="icon">
                <BiBrain />
              </div>
              <p>We provide innovative IT solutions to optimize your business operations and ensure data security.</p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon">
                <BiBrain />
              </div>
              <p>Our services are designed to meet the ever-evolving needs of the IT industry, offering cutting-edge technologies.</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className="services__intro__text">
            <h1>We are the solutions for IT problems</h1>
            <p className="text">
              At our core, we believe in creating smarter IT solutions that drive productivity and efficiency. Our team of experts is passionate about delivering innovative strategies that help you stay ahead of the competition. Whether you're looking to secure your network, improve your cloud infrastructure, or develop custom applications, we’ve got the expertise to turn your challenges into opportunities.
            </p>
            <button className="btn btn-primary">More About</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
