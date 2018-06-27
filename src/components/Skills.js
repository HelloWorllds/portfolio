import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Skills extends Component {
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
			<div className={active == 1 ? 'skills skills__state_active' : 'skills'}>
				Page Skills
				<Link to='/' className='skills__close'>close</Link>
			</div>
		)
	}

	componentWillUnmount() {
		this.setState({active: 0});
	}
}