import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class Exp extends Component {
	constructor(props) {
		super(props);
		this.state = {active: 0}

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
			<div className={this.state.active == 1 ? 'exp exp__state_active' : 'exp'}>
				<div className='exp__close' onClick={ this.onClose }></div>
				<div className='exp__container'>
					<div className='exp__header'>Experience</div>
					<div className='exp__works'>
						<div className='exp__work-item'>
							<div className='exp__top-block'>
								<div className='exp__work-number'>1</div>
								<div className='exp__work-name'>Web studio</div>
								<div className='exp__work-period'>may 2017 - present day</div>
								<div className='exp__work-position'>html-coder</div>
							</div>
							<div className='exp__bottom-block'>
								<div className='exp__work-header'>Responsibilities:</div>
								<div className='exp__work-descr'>
									<ul>
										<li>Markup from PSD layouts to HTML</li>
										<li>Create sites on CMS Joomla</li>
										<li>Edit CMS modules</li>
										<li>Create CMS modules</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='exp__work-item'>
							<div className='exp__top-block'>
								<div className='exp__work-number'>2</div>
								<div className='exp__work-name'>Freelance</div>
								<div className='exp__work-period'>january 2017 - april 2017</div>
								<div className='exp__work-position'>disigner</div>
							</div>
							<div className='exp__bottom-block'>
								<div className='exp__work-header'>Responsibilities:</div>
								<div className='exp__work-descr'>
									<ul>
										<li>Business card design creation</li>
										<li>Advertisements design creation</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	componentWillUnmount() {
		this.setState({active: 0});
	}
}