import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Hi, I'm <strong>FJSHomeplate</strong>, a <br />
                    little game-devolping, people-helping, website-building organization.</h1>
                    <p>FJSHomeplate is an part open-source 
                    orginization bringing the finest apps and games from our computers into your hands.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
