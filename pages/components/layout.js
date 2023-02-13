import Footer from "./footer";
import Navbar from "./Navbar";

const styles = {
  display: "flex",
  flexDirection: "row"
};

const Layout = ({ children }) => {
  return (
    <div className="page-container" style={styles}>
   <div className="content-wrap">
      <Navbar />
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
