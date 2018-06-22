import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
	render() {
		return (
			<div className='main-container'>
				<Link to='/'><img src='/images/logo.png' alt='logo'/></Link>
				<div className='main-menu'>
					<div className='main-menu__item main-menu__item_about'><Link to='/about'>About</Link></div>
					<div className='main-menu__item main-menu__item_exp'><Link to='/experience'>Experience</Link></div>
					<div className='main-menu__item main-menu__item_skills'><Link to='/skills'>Skills</Link></div>
					<div className='main-menu__item main-menu__item_portfolio'><Link to='/portfolio'>Portfolio</Link></div>
					<div className='main-menu__item main-menu__item_contacts'><Link to='/contacts'>Contacts</Link></div>
				</div>
				<div className='content'>
					{this.props.children}
				</div>
			</div>
		)
	}
}