import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class About extends Component {
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
			<div className={this.state.active == 1 ? 'about about__state_active' : 'about'}>
				<div className='about__close' onClick={ this.onClose }></div>
				<div className='about__container'>
					<h2 className='about__header-top'>Hello world!</h2>
					<h1 className='about__header-center'>I'm Vladimir Lysiuk</h1>
					<h3 className='about__header-bottom'>html-coder</h3>
					<div className='about__text'>
						Hello. My name is Vladimir. For a long time I am fond of making sites and more than a year 
						I have been working as a front-end developer in a web studio. I constantly study new features, 
						develop professionally and use the studied material to improve the quality of work. Attentive 
						to details, quickly learn new things, take responsibility for work. In my spare time 
						I can go to the cinema or sit in a company of friends, or twist pedals around 
						Kiev and the region, well, or just relax in some favorite computer game.
					</div>
				</div>
			</div>
		)
	}

	componentWillUnmount() {
		this.setState({active: 0});
	}
}