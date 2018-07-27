import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'next/router'
import Link from 'next/link'


const NavItem = (props) => {
  return (
    <div>
      <Link href={props.href}>
        {props.currentUrl == props.href ?
          <a className="is-active">{props.title}</a>:
          <a>{props.title}</a>
        }
      </Link>
    </div>
  )
}


class Nav extends React.Component {

  render(){
    const currentUrl = this.props.router.asPath
    return (
      <nav>
        <NavItem title="Home" href="/" currentUrl={currentUrl} />
        <NavItem title="About" href="/about" currentUrl={currentUrl} />
      </nav>
    )
  }

}


export default withRouter(Nav)
