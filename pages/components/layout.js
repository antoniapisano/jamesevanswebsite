import Footer from "./footer";
import Image from 'next/image';
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="page-container" >
      <div className="backgroundimage">
      <Image 
        src="/neutralguitar.webp"
        alt="efes https://pixabay.com/illustrations/art-collage-layout-multicoloured-2340061/"
        fill
        style={{objectFit:"cover"}}
      />  
    </div>
   <div className="content-wrap">
      <Navbar />
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
