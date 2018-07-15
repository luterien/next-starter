import React from 'react';
import ReactDOM from 'react-dom';

import Layout from '../components/layout'


class Page extends React.Component {

  render(){
    return (
      <Layout>
      	<div className="page-content">
      	  {this.props.children}
      	</div>
      </Layout>
    )
  }

}

export default Page