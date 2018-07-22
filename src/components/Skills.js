import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

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
							<div className='diagram__line diagram__line_jedi'></div>
							<div className='diagram__line diagram__line_ninja'></div>
							<div className='diagram__line diagram__line_geek'></div>
							<div className='diagram__line diagram__line_newbie'></div>
						</div>
						<CSSTransitionGroup 
							transitionName='showditem'
							transitionAppear={true}
							transitionAppearTimeout={1100}
							transitionEnter={false}
							transitionLeave={false}
						>
							<div className='diagram__item diagram__item_html'>
								<div className='diagram__item-parcent'>
									92
									<span>%</span>
								</div>
								<div className='diagram__item-name'>HTML/CSS</div>
							</div>
							<div className='diagram__item diagram__item_tea'>
								<div className='diagram__item-parcent'>
									96
									<span>%</span>
								</div>
								<div className='diagram__item-name'>Tea drinking</div>
							</div>
							<div className='diagram__item diagram__item_sass'>
								<div className='diagram__item-parcent'>
									75
									<span>%</span>
								</div>
								<div className='diagram__item-name'>Sass/Less</div>
							</div>
							<div className='diagram__item diagram__item_jquery'>
								<div className='diagram__item-parcent'>
									65
									<span>%</span>
								</div>
								<div className='diagram__item-name'>jQuery</div>
							</div>
							<div className='diagram__item diagram__item_bem'>
								<div className='diagram__item-parcent'>
									75
									<span>%</span>
								</div>
								<div className='diagram__item-name'>BEM</div>
							</div>
							<div className='diagram__item diagram__item_pizza'>
								<div className='diagram__item-parcent'>
									96
									<span>%</span>
								</div>
								<div className='diagram__item-name'>Eating pizza</div>
							</div>
							<div className='diagram__item diagram__item_react'>
								<div className='diagram__item-parcent'>
									20
									<span>%</span>
								</div>
								<div className='diagram__item-name'>React.js</div>
							</div>
						</CSSTransitionGroup>
					</div>
				</div>
			</div>
		)
	}

	componentWillUnmount() {
		this.setState({active: 0});
	}
}