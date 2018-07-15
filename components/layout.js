import React from 'react';
import ReactDOM from 'react-dom';

import Nav from '../components/navbar'
import Footer from '../components/footer'
import Head from '../components/head'


class Layout extends React.Component {

  render(){
    return (
      <div>
      	<Head />
      	<Nav />
      	{ this.props.children }
      	<Footer />
      </div>
    )
  }

}

export default Layout
