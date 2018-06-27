import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Exp extends Component {
	constructor(props) {
		super(props);
		this.state = {active: 0}
	}

	componentDidMount() {
		this.setState({active: 1});
	}

	render() {
		const active = this.state.active;
		return (
			<div className={active == 1 ? 'exp exp__state_active' : 'exp'}>
				Page Experience
				<Link to='/' className='exp__close'>close</Link>
			</div>
		)
	}

	componentWillUnmount() {
		this.setState({active: 0});
	}
}