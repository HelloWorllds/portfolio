import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class SliderItem extends Component {
	render() {
		return (
			<div className='portfolio__item'>
				<div className='portfolio__item-img' style={{backgroundImage: `url(${this.props.img})`}}></div>
				<CSSTransitionGroup 
					transitionName='showlink'
					transitionEnterTimeout={500} 
					transitionLeave={false}
				>
					<div key={this.props.name} className='portfolio__item-container'>
						<h2 className='portfolio__item-name'>{this.props.name}</h2>
						<div>
							<a 
								href={this.props.url} 
								target='_blank' 
								className='portfolio__item-link' 
								title={'link to - ' + this.props.name}
							>
								Visit site
							</a>
						</div>
						<div className='portfolio__item-descr'>
							{this.props.descr}
						</div>
					</div>
				</CSSTransitionGroup>
			</div>
		);
	}
}