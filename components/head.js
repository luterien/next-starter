import React from 'react';
import ReactDOM from 'react-dom';

import NextHead from 'next/head'
import Router from 'next/router'

import NProgress from 'nprogress'


Router.onRouteChangeStart = (url) => {
  console.log(url)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


class Head extends React.Component {

  render (){
  	return (
	  <NextHead>
		<title>Title goes here</title>
		<meta name="keywords" content={this.props.keywords} />
		<meta name="description" content={this.props.description} />
    	<link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
	  </NextHead>
  	)
  }

}


export default Head
