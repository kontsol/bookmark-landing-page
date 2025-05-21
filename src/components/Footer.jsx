import logo from "../assets/images/logo-bookmark-white.svg";
import { HEADER, SOCIALS } from "../Global";

const Footer = () => {
  return (
    <footer className="bg-[#252b46] w-full">
      <div className="section-wrapper py-16 md:py-8 flex flex-col  md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-5 lg:gap-10 xl:gap-15  w-full items-center">
          <img className="" src={logo} alt="logo" />
          <ul className="flex flex-col md:flex-row gap-5 lg:gap-10 xl:gap-15 items-center">
            {HEADER.map((item, index) => (
              <li
                className="text-[#f7f7f7] heading-sm-400 hover:text-[#fa5757] cursor-pointer"
                key={index}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex  mt-5 md:mt-0 gap-5 lg:gap-10 xl:gap-15">
          {SOCIALS.map((item, index) => (
            <li className="" key={index}>
              <img src={item.icon} alt={item.alt} className="social-icon" />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
