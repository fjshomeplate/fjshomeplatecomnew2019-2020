import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'FJSHomeplate'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Welcome To FJSHomeplate!</h2>
              </header>
              <p>An organization dedicated to making the finest applications and games!</p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
                  <span className="icon style1 major fa-code" />
                </li>
                <li>
                  <span className="icon style2 major fa-bolt" />
                </li>
                <li>
                  <span className="icon style3 major fa-phone" />
                </li>
                <li>
                  <span className="icon style4 major fa-cog" />
                </li>
                <li>
                  <span className="icon style5 major fa-desktop" />
                </li>
                <li>
                  <span className="icon style6 major fa-calendar" />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>Building Apps for all.</h2>
              </header>
              <p>
                FJSHomeplate builds modern applications and games.
              </p>
              <p>
                We also build websites, blogs and other every-day soulutions.
              </p>
              <p>
               Everything that has FJSHomeplate has our top qaulity. 
              </p>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Ipsum feugiat consequat?</h2>
            </header>
            <p>Sed lacus nascetur ac ante amet sapien.</p>
            <ul className="actions uniform">
              <li>
                <a href="account" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}
export default Homepage;
