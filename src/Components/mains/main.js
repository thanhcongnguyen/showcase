import React from 'react'

import {Sidebar} from 'Components/mains/sidebars'

import { ContentWrapper } from 'Components/mains/contents'

class Main extends React.Component{
	render(){
		return(
			<div>
				<section>
					<div className="row">
						<div className="banner container">
							<div className="col-lg-12 col-md-12 col-sm-12 hidden-xs">
								<img src="./img/newslog-hbn-1.png" alt="banner" />
							</div>
						</div>
					</div>
				</section>
				<section id="main">
					<div className="container main">
						<div className="row">

							<ContentWrapper/>

							<Sidebar/>
							
						</div>
					</div>
				</section>
			</div>
		)
	}
}


export default Main