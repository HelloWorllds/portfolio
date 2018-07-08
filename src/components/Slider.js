import React, { Component } from 'react'

export default class Slider extends Component {
	constructor(props) {
		super(props);
		this.onSlidePrev = this.onSlidePrev.bind(this);
		this.onSlideNext = this.onSlideNext.bind(this);
		this.state = {current: 0, total: 4};
	}

	onSlidePrev() {
		let current = this.state.current;
		const total = this.state.total;

		if (current < total) {
			current++;
			this.setState({current: current});
		} else {
			current = total;
			this.setState({current: current});
		}
		console.log('Current - ' + current);
	}

	onSlideNext() {
		let current = this.state.current;
		const total = this.state.total;

		if (current < total && current > 0 ) {
			current--;
			this.setState({current: current});
		} else {
			current = 0;
			this.setState({current: current});
		}
		console.log('Current - ' + current);
	}

	render() {
		return (
			<div className='portfolio__items'>
				<button type='button' onClick={this.onSlidePrev.bind(this)}>Prev</button>
				<button type='button' onClick={this.onSlideNext.bind(this)}>Next</button>
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
		);
	}
}