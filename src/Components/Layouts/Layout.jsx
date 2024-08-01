// import React from 'react'

import Footer from "./Footer"
import Header from "./Header"
import PropTypes from 'prop-types';

function Layout({children}) {
  return (
    <div>
     <Header/>
     <div>{children}</div>
     <Footer/>
    </div>
  )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default Layout