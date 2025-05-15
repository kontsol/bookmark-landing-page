import logo from "../assets/images/logo-bookmark.svg";
import { HEADER, SOCIALS } from "../Global";

const Footer = () => {
  return (
    <footer className="bg-[#252b46] w-full">
      <div className="section-wrapper paddingY flex justify-between">
        <div className="flex content-gap">
          <img className="bg-red-400" src={logo} alt="logo" />
          <ul className="flex content-gap items-center  ">
            {HEADER.map((item, index) => (
              <li className="text-[#f7f7f7] heading-xs-400" key={index}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <ul className="flex content-gap">
            {SOCIALS.map((item, index) => (
              <li className="border-1 border-lime-400" key={index}>
                <img src={item.icon} alt={item.alt} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
