import React, { Component } from 'react'

export default class SliderItem extends Component {
	render() {
		return (
			<div className='portfolio__item' style={{backgroundImage: `url(${this.props.img})`}}>
				<div className='portfolio__item-container'>
					<a href={this.props.url} target='_blank' className='portfolio__item-link' title={'link to - ' + this.props.name}>{this.props.name}</a>
				</div>
			</div>
		);
	}
}