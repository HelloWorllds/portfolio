import React, { Component } from 'react'

export default class SliderItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='portfolio__item' style={{backgroundImage: `url(${this.props.img})`}}>
				<div className='portfolio__item-header'>{this.props.name}</div>
				<div className='portfolio__item-descr'>{this.props.descr}</div>
				<a href={this.props.url} target='_blank' className='portfolio__item-link'>{this.props.name}</a>
			</div>
		);
	}
}