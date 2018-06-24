import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import Home from './components/Home'
import About from './components/About'
import Exp from './components/Exp'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import './styles/main.sass'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='about' component={About} />
			<Route path='experience' component={Exp} />
			<Route path='skills' component={Skills} />
			<Route path='portfolio' component={Portfolio} />
			<Route path='contacts' component={Contacts} />
		</Route>
		<Route path='*' component={NotFound} />
	</Router>,
	document.getElementById('root')
) 