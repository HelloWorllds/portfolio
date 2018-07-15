import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
	render() {
		return (
			<div className='error-page'>
				<Link to='/' className='main-logo'><img src='/images/logo.png' alt='logo'/></Link>
				<div className='error-page__text'>Psst, hey you! <br /> Are you looking something?</div>
				<div className='error-page__btn-wrapper'>
					<Link to='/' className='error-page__link'>Go home</Link>
				</div>
				<div className='error-page__number'>404</div>
				<footer className='footer'>© 2018 Vladimir Lysiuk</footer>
			</div>
		)
	}
}