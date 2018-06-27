import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
	render() {
		return (
			<div className='error-page'>
				404
				<br />
				Page not found
				<br />
				<Link to='/'>Home</Link>
			</div>
		)
	}
}