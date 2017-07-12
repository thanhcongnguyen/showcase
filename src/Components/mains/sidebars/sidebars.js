import React from 'react'
import Search from './search'
import Tags from './tags'
import Newposts from './newPosts'
import BRight from './banner'

export default class Sidebar extends React.Component{
	render(){
		return(
		<aside className="sidebar col-lg-4 col-md-4">
				<div className="row">
					<div className="col-lg-12 col-md-12 hidden-sm hidden-xs">
						<Search/>
						
						<Newposts/>

						<BRight/>

						<Tags/>
					</div>
				</div>	
		</aside>

		)
	}
}
