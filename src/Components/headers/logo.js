import React from 'react'
import { Link } from 'react-router-dom'
class Logo extends React.Component{
	render(){
		return(
			<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<div className="logo">
					<Link to="/home" className="logo">
						<img src="img/logo.png" alt="logo" />
					</Link>
				</div>
			</div>
			)
	}
}


export default Logo