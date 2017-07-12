import React from 'react'
import Logo from './logo.js'
import Menu from './menu.js'

export default class Header extends React.Component{
	render(){
		return(
			<header id="header">
				<div className="container">
					<div className="row">
						<Logo/>
						<Menu/>
					</div>
				</div>
			</header>
		)
	}
}


