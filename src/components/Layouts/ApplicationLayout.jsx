import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from "../../../assets/images/Logo/logo.svg";
// import { Box } from '../../styles/custom';
import Footer from './Footer';
import Header from './Header';

const ApplicationLayout = (props) => {

  // const LogoHeader = () => {
  //   return (
  //     <Box padding="0 20px">
  //       <Link to="/" className="logo">
  //         <img src={Logo} alt="Songs Nepal" className="logo" />{" "}
  //       </Link>
  //     </Box>
  //   )
  // }

  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default ApplicationLayout;