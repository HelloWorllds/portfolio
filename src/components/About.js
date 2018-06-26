import React, { Component } from 'react'

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
			<div className={active == 1 ? 'about active': 'about'}>
				Page About
			</div>
		)
	}

	componentWillUnmount() {
		this.setState({active: 0});
	}
}