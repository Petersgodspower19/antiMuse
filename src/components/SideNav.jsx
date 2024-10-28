import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoMdClose } from "react-icons/io";
import Links from "./Links";

function SideBar({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 100);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 h-full sideBar ${isClosing ? 'fade-out' : ''} bg-footer`}
      data-aos="fade-right"
      data-aos-duration="600"
    >
      <IoMdClose color="#d4a474" size={32} onClick={handleClose} className='mb-7 cursor-pointer'  />
      <ul className='nav-list flex flex-col gap-3 mb-3'>
      <Links to="home"onClick={onClose}>Home</Links>
        <Links to="shop" onClick={onClose}>Shop</Links>
        <Links to="features" onClick={onClose}>Features</Links>
        <Links to="products" onClick={onClose}>Products</Links>
        <Links to="reviews" onClick={onClose}>Reviews</Links> 
      </ul>
    </div>
  );
}

export default SideBar;
