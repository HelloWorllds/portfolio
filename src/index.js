import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import About from './components/About'
import Exp from './components/Exp'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import './styles/main.sass'

import { Router, Route, browserHistory } from 'react-router'
import { AnimatedSwitch } from 'react-router-transition'

render(
	<Router history={browserHistory}>
		<AnimatedSwitch
			atEnter={{ opacity: 0 }}
			atLeave={{ opacity: 0 }}
			atActive={{ opacity: 1 }}
			className='switch-wrapper'
		>
			<Route exact path='/' component={App}>
				<Route path='about' component={About} />
				<Route path='experience' component={Exp} />
				<Route path='skills' component={Skills} />
				<Route path='portfolio' component={Portfolio} />
				<Route path='contacts' component={Contacts} />
			</Route>
			<Route path='*' component={NotFound} />
		</AnimatedSwitch>
	</Router>,
	document.getElementById('root')
) 