import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Contacts extends Component {
	constructor(props) {
		super(props);
		this.state = {active: 0};
	}

	componentDidMount() {
		this.setState({active: 1});
	}

	render() {
		const active = this.state.active;
		return (
			<div className={active == 1 ? 'contacts contacts__state_active' : 'contacts'}>
				Page Contacts
				<Link to='/' className='contacts__close'>close</Link>
			</div>
		)
	}

	componentWillUnmount() {
		this.setState({active: 0});
	}
}