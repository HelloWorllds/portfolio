import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class Contacts extends Component {
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
			<div className={this.state.active == 1 ? 'contacts contacts__state_active' : 'contacts'}>
				<div className='contacts__close' onClick={ this.onClose }></div>
				<div className='contacts__container'>
					<div className='contacts__header'>Contacts</div>
					<div className='contacts__links'>
						<a href='https://www.linkedin.com/in/v-lysiuk/' target='_blank' className='contacts__link contacts__link_linkedin'>
							<div className='contacts__tooltip'>LinkedIn</div>
						</a>
						<a href='https://github.com/HelloWorllds' target='_blank' className='contacts__link contacts__link_github'>
							<div className='contacts__tooltip'>GitHub</div>
						</a>
						<a href='https://codepen.io/HelloWorllds/' target='_blank' className='contacts__link contacts__link_codepen'>
							<div className='contacts__tooltip'>CodePen</div>
						</a>
						<a href='mailto:vladimir.lysuk@gmail.com' target='_blank' className='contacts__link contacts__link_e-mail'>
							<div className='contacts__tooltip'>E-mail</div>
						</a>
						<a href='https://drive.google.com/open?id=1F6YrEqv89Klaevne4gzquOGPytOJMnxw' target='_blank' className='contacts__link contacts__link_resume'>
							<div className='contacts__tooltip'>Resume</div>
						</a>
					</div>
				</div>
			</div>
		)
	}

	componentWillUnmount() {
		this.setState({active: 0});
	}
}