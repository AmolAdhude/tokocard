import "./index.css";
import { RiCustomerService2Fill } from "react-icons/ri";

const Services = () => (
  <div className="services-container">
    <h1 className="services-heading">Services</h1>
    <p className="service-info">
      Lorem lpsum is simply dummy text of the parinting and typesettig industry.
      Lorem Ipsum has been the industry's standard dummy te ever since the
      1500s.
    </p>
    <div className="service-list-container">
      <ul className="services-item">
        <li className="item">
          <RiCustomerService2Fill className="service-icon" />
          <h1 className="service-heading">Website-development</h1>
        </li>
        <li className="item">
          <RiCustomerService2Fill className="service-icon" />
          <h1 className="service-heading">Digital Marketing</h1>
        </li>
        <li className="item">
          <RiCustomerService2Fill className="service-icon" />
          <h1 className="service-heading">Application Development</h1>
        </li>
      </ul>
    </div>
    <div className="service-list-container">
      <ul className="services-item">
        <li className="item">
          <RiCustomerService2Fill className="service-icon" />
          <h1 className="service-heading">Website-development</h1>
        </li>
        <li className="item">
          <RiCustomerService2Fill className="service-icon" />
          <h1 className="service-heading">Digital Marketing</h1>
        </li>
        <li className="item">
          <RiCustomerService2Fill className="service-icon" />
          <h1 className="service-heading">Application Development</h1>
        </li>
      </ul>
    </div>
  </div>
);
export default Services;
