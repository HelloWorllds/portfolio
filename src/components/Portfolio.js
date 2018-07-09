import React, { Component } from 'react'
import { Link } from 'react-router'
import Slider from './Slider'

export default class Portfolio extends Component {
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
			<div className={active == 1 ? 'portfolio portfolio__state_active' : 'portfolio'}>
				<Link to='/' className='portfolio__close'></Link>
				<Slider />
			</div>
		)
	}

	componentWillUnmount() {
		this.setState({active: 0});
	}
}