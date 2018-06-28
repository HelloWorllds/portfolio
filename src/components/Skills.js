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
				<Link to='/' className='skills__close'></Link>
				<div className='skills__container'>
					<div className='skills__header'>Skills</div>
					<div className='diagram'>
						<div className='diagram__grid'>
							<div className='diagram__axis-y'></div>
							<div className='diagram__axis-x'></div>
							<div className='diagram__line diagram__line_jedi'>Jedi</div>
							<div className='diagram__line diagram__line_ninja'>Ninja</div>
							<div className='diagram__line diagram__line_geek'>Geek</div>
							<div className='diagram__line diagram__line_newbie'>Newbie</div>
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