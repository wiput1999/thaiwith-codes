import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

import Dev from './dev'
import Footer from './footer'
import Navbar from './navbar'

import layoutStyle from './layout.module.css'

export default class LayoutTemplate extends React.Component {
  render() {
    let devStrip = ''

    const {GATSBY_ENV = 'development'} = process.env

    if (GATSBY_ENV !== 'production') {
      devStrip = <Dev />
    }
    const {children} = this.props
    return (
      <div className={layoutStyle.page}>
        {devStrip}
        <div className={layoutStyle.cover}>
          <div className={[layoutStyle.container]}>
            <div className={[layoutStyle.header]}>
              <Link to={'/'}>
                <img
                  className={layoutStyle.logo}
                  alt="logo"
                  src="/header.png"
                />
              </Link>
              <Navbar
                align="center"
                keys="navHeader"
                tabs={[
                  {
                    name: 'Home',
                    href: '/',
                    newtab: false,
                  },
                  {
                    name: 'Category',
                    href: '/category',
                    newtab: false,
                  },
                  {
                    name: '♪',
                    href: 'https://l.rayriffy.com/nico',
                    newtab: true,
                  },
                ]}
              />
            </div>
            {children}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

LayoutTemplate.propTypes = {
  children: PropTypes.array,
}
