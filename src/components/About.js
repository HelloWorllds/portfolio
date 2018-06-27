import React, { Component } from 'react'
import { Link } from 'react-router'

export default class About extends Component {
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
			<div className={active == 1 ? 'about about__state_active' : 'about'}>
				Page About
				<Link to='/' className='about__close'>close</Link>
			</div>
		)
	}

	componentWillUnmount() {
		this.setState({active: 0});
	}
}