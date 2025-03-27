import { Component } from "react";
import { GrShieldSecurity } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";

class ServicesComp extends Component {
  render() {
    return (
      <div className="services__servicesComp">
        <div>
          <h1>Our Services For Technology You Need</h1>
          <button className="btn btn-primary">Load More</button>
        </div>
        <div className="services__list">
          <div className="service-item">
            <div className="icon">
              <GrShieldSecurity />
            </div>
            <h4>Cyber Security</h4>
            <p>
              Our Cyber Security services are designed to protect your business from cyber threats.
              We provide end-to-end protection, from network security to data encryption, ensuring your sensitive
              information remains secure against hackers and malicious attacks.
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          <div className="service-item">
            <div className="icon">
              <BsLaptop />
            </div>
            <h4>IT Consultant</h4>
            <p>
              We offer expert IT consulting services to help businesses optimize their technology and infrastructure.
              Whether you're setting up new systems or upgrading existing ones, our team provides tailored solutions
              that fit your unique business needs.
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          <div className="service-item">
            <div className="icon">
              <GrShieldSecurity />
            </div>
            <h4>IT Support</h4>
            <p>
              Our IT support services ensure that your systems are running smoothly with minimal downtime.
              From troubleshooting hardware and software issues to providing remote assistance, we are dedicated
              to keeping your business operational at all times.
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          <div className="service-item">
            <div className="icon">
              <BsLaptop />
            </div>
            <h4>Networking</h4>
            <p>
              Our Networking services are designed to build reliable and secure connections for your business.
              We specialize in setting up local area networks (LANs), wide area networks (WANs), and secure VPNs
              to keep your operations connected and protected.
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          <div className="service-item">
            <div className="icon">
              <GrShieldSecurity />
            </div>
            <h4>Cloud Solutions</h4>
            <p>
              Move your business to the cloud with our scalable cloud solutions. We help you manage data, reduce
              infrastructure costs, and improve collaboration through secure and efficient cloud platforms like AWS, 
              Microsoft Azure, and Google Cloud.
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          <div className="service-item">
            <div className="icon">
              <BsLaptop />
            </div>
            <h4>Hardware Solutions</h4>
            <p>
              We provide cutting-edge hardware solutions, from high-performance servers to workstations and
              peripherals. Whether you're upgrading your equipment or setting up a new office, we offer
              customized hardware to meet your business needs.
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          <div className="service-item">
            <div className="icon">
              <BsLaptop />
            </div>
            <h4>Printer Rental</h4>
            <p>
              Need a printer for short-term use? Our printer rental services provide businesses with flexible
              solutions for all your printing needs. Choose from a variety of models with flexible terms to keep
              your office running smoothly without the long-term commitment.
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesComp;
