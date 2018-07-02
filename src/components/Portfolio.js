import React, { Component } from 'react'
import { Link } from 'react-router'

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
				<div className='portfolio__container'>
					<div className='portfolio__header'>Portfolio</div>
					<div className='portfolio__items'>
						<div className='portfolio__item portfolio__item_site1'>
							<div className='portfolio__item-header'>Site1</div>
							<div className='portfolio__item-descr'>Site 1 description</div>
							<a href='/' target='_blank' className='portfolio__item-link'>Site1</a>
						</div>
						<div className='portfolio__item portfolio__item_site2'>
							<div className='portfolio__item-header'>Site2</div>
							<div className='portfolio__item-descr'>Site 2 description</div>
							<a href='/' target='_blank' className='portfolio__item-link'>Site2</a>
						</div>
						<div className='portfolio__item portfolio__item_site3'>
							<div className='portfolio__item-header'>Site3</div>
							<div className='portfolio__item-descr'>Site 3 description</div>
							<a href='/' target='_blank' className='portfolio__item-link'>Site3</a>
						</div>
						<div className='portfolio__item portfolio__item_site4'>
							<div className='portfolio__item-header'>Site4</div>
							<div className='portfolio__item-descr'>Site 4 description</div>
							<a href='/' target='_blank' className='portfolio__item-link'>Site4</a>
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