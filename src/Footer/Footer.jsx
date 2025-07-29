"use client";
import FooterBgImg from "@/assets/footer.svg";
import Facebook from "@/assets/facebook.svg";
import Instagram from "@/assets/instagram.svg";
import Youtube from "@/assets/youtube.svg";
import Twitter from "@/assets/twitter.svg";
import Linkedin from "@/assets/linkedin.svg";
import Container from "@/components/Container/Container";
import apartment from "@/assets/apartment.svg";
import call from "@/assets/call.svg";
import mail from "@/assets/mail.svg";
import ASND_logo from "@/assets/ASND_logo.svg";
export default function Footer() {
  const services = [
    "IT Consultations",
    "Data Security",
    "Website Development",
    "UI/UX Design",
    "Cloud Services",
    "Game Development",
    "CRM & Software",
  ];

  const quickLinks = [
    "About Us",
    "Services",
    "Portfolio",
    "Contact Us",
    "Terms & conditions",
    "Privacy Policy",
    "Career",
  ];

  const contactDetails = [
    {
      icon: apartment.src,
      text: "Dwarka Sector-9, New Delhi pin 110045",
    },
    {
      icon: call.src,
      numbers: ["+91-1234567890", "+91-9876543210"], // two numbers
    },
    {
      icon: mail.src,
      text: "Support@asnd.com",
    },
  ];

  const socialIcons = [
    {
      icons: Facebook.src,
    },
    {
      icons: Instagram.src,
    },
    {
      icons: Youtube.src,
    },
    {
      icons: Twitter.src,
    },
    {
      icons: Linkedin.src,
    },
  ];
  const bgImage = {
    backgroundImage: `url(${FooterBgImg.src})`,
  };
  return (
    <footer className="text-white py-12 md:px-0 px-[16px]" style={bgImage}>
      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 text-sm">
          <div className="w-[220px] md:mb-0 mb-[40px] opacity-[0.8]">
            <img src={ASND_logo.src}></img>
            <p className="text-white-400 mb-[40px] mt-[20px]">
              Best IT Solutions & Technology
            </p>
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="flex gap-[12px] mb-[12px] text-white-400"
              >
                <img className="w-[18px]" src={item.icon}></img>
                <div>
                  {item.text && <span>{item.text}</span>}
                  {item.numbers &&
                    item.numbers.map((num, i) => <div key={i}>{num}</div>)}
                </div>
              </div>
            ))}
          </div>

          <div className="md:mb-0 mb-[40px]">
            <h3 className="text-white font-semibold mb-4 text-[20px]">
              Services
            </h3>
            <ul className="space-y-2 text-white-400 opacity-[0.8] cursor-pointer">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="md:mb-0 mb-[40px]">
            <h3 className="text-white font-semibold mb-4 text-[20px]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-white-400 opacity-[0.8] cursor-pointer">
              {quickLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-[20px]">
              News Letter
            </h3>
            <p className="text-white-400 mb-[40px] opacity-[0.8]">
              Register now to get latest updates on promotions & coupons
            </p>
            <div className="flex  opacity-[0.8]">
              <input
                type="email"
                placeholder="Type Your email"
                className="w-[220px] p-2 rounded-l pl-[20px] bg-[#373737] text-white placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-blue-600 px-4 rounded-r text-white cursor-pointer">
                Subscribe
              </button>
            </div>
            <p className="text-white-500 text-[13px] leading-[16px] mt-[16px] mb-[40px] opacity-[0.8]">
              By subscribing, you accepted the our Policy
            </p>
            <div className="flex space-x-4 mt-4">
              {socialIcons.map((Icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 bg-[#454545] rounded-full flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={Icon.icons}
                    alt={`social-icon-${index}`}
                    className="w-4 h-4 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
