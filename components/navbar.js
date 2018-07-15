import React from 'react';
import ReactDOM from 'react-dom';

import Link from 'next/link'


const NavItem = (props) => {
  return (
    <div>
      <Link href={props.href}>
        <a>
          {props.title}
        </a>
      </Link>
    </div>
  )
}


class Nav extends React.Component {

  render(){
    return (
      <nav>
        <NavItem title="Home" href="/" />
        <NavItem title="About" href="/about" />
      </nav>
    )
  }

}


export default Nav
