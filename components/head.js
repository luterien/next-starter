import React from 'react';
import ReactDOM from 'react-dom';

import NextHead from 'next/head'


class Head extends React.Component {

  render (){
  	return (
	  <NextHead>
		<title>Title goes here</title>
		<meta name="keywords" content={this.props.keywords} />
		<meta name="description" content={this.props.description} />
	  </NextHead>
  	)
  }

}


export default Head
