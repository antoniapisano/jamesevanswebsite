import React, {useState} from "react";
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <Image
      className="navbarImage"
      src="/venezuelan-cuatro.webp"
      alt="venezuelan-cuatro"
      fill
      style={{objectFit:"cover"}}
    />
      <span className="logo">James Evans</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <ul>
        
          <li>
        <a href="https://www.youtube.com/@jamesevansmusic231">Youtube</a>
        </li>
        <li>
        <a href="https://www.instagram.com/james_evans_music/?hl=en">Instagram</a>
        </li>
        </ul>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;