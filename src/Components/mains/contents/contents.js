import React from 'react'
import { Route } from 'react-router-dom'

import Article from './article'



export default class ContentWrapper extends React.Component{
	render(){
		return(
			<div className="col-lg-8 col-md-8">
				<Article />
				
			</div>
			)
	}
}