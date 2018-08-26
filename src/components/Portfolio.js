import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Slider from './Slider'

export default class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {active: 0};

		this.onClose = this.onClose.bind(this);
	}

	componentDidMount() {
		this.setState({active: 1});
	}

	onClose() {
		this.setState({active: 0});
		setTimeout(function() {
			browserHistory.push('/');
		}, 300);
	}

	render() {
		return (
			<div className={this.state.active == 1 ? 'portfolio portfolio__state_active' : 'portfolio'}>
				<div className='portfolio__close' onClick={ this.onClose }></div>
				<Slider />
			</div>
		)
	}

	componentWillUnmount() {
		this.setState({active: 0});
	}
}