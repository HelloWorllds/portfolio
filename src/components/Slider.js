import React, { Component } from 'react'
import SliderItem from './SliderItem'
import Sites from '../store/Sites'

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
				<button type='button' className='portfolio__arrow portfolio__arrow_prev' onClick={ this.prevSlide }></button>
				
				<SliderItem url={Sites[this.state.current].url} 
							img={Sites[this.state.current].image}
							name={Sites[this.state.current].name}
				/>

				<button type='button' className='portfolio__arrow portfolio__arrow_next' onClick={ this.nextSlide }></button>
			</div>
		);
	}
}