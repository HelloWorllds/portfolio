import React, { Component } from 'react'
import { Link } from 'react-router'
import AboutAction from '../actions/AboutAction'
import ExpAction from '../actions/ExpAction'
import SkillsAction from '../actions/SkillsAction'
import PortfolioAction from '../actions/PortfolioAction'
import ContactsAction from '../actions/ContactsAction'

export default class App extends Component {
	render() {
		return (
			<div className='main-container'>
				<Link to='/' className='main-logo'><img src='/images/logo.png' alt='logo'/></Link>
				<div className='main-menu'>
					<Link to='/about'><AboutAction /></Link>
					<Link to='/experience'><ExpAction /></Link>
					<Link to='/skills'><SkillsAction /></Link>
					<Link to='/portfolio'><PortfolioAction /></Link>
					<Link to='/contacts'><ContactsAction /></Link>
				</div>
				{this.props.children}
			</div>
		)
	}
}