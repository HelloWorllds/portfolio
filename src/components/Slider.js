import React, { Component } from 'react'
import SliderItem from './SliderItem'

var siteNames = [
	'D.TEK Calculator',
	'Koblevo',
	'Latte',
	'TVIS',
	'KeramKIEV',
	'Wexler',
	'Form Service'
];

export default class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {current: 0, total: 7};

		this.prevSlide = this.prevSlide.bind(this);
		this.nextSlide = this.nextSlide.bind(this);
	}

	prevSlide() {
		const lastIndex = this.state.total - 1;
		const { current } = this.state;
		const resetIndex = current === 0;
		const index = resetIndex ? lastIndex : current - 1;

		this.setState({
			current: index
		});
	}

	nextSlide() {
		const lastIndex = this.state.total - 1;
		const { current } = this.state;
		const resetIndex = current === lastIndex;
		const index = resetIndex ? 0 : current + 1;

		this.setState({
			current: index
		});
	}

	render() {
		return (
			<div className='portfolio__items'>
				<button type='button' className='portfolio__arrow portfolio__arrow_prev' onClick={ this.prevSlide }>Prev</button>
				
				<SliderItem url={'/'} 
							img={'/images/' + this.state.current + '.jpg'}
							name={siteNames[this.state.current]}
				/>

				<button type='button' className='portfolio__arrow portfolio__arrow_next' onClick={ this.nextSlide }>Next</button>
			</div>
		);
	}
}