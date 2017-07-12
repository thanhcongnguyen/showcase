import React from 'react'
import { graphql } from 'react-apollo'
import Post from './onePost'
import gql from 'graphql-tag'



class Newposts extends React.Component{
	render(){

		const { data : { loading, Articles } } = this.props
		if(loading==false){ 
			var posts = Articles.map(function(i){
					return (
						<Post key={i.id}  image={i.image} title_vi={i.title_vi} date={i.updated_at} />		
					)
			})
		}else{
			var posts = `Loading...`
		}


		return (

				<div className="new-post">
					<h3 className="title-section">Bài viết mới nhất</h3>
						<div className="wiget-content">
							<ul>
							{posts}
							</ul>
						</div>
				</div>

			)
	}
}


const MyQuery = gql`{ Articles{ id, title_vi, title_en , image ,summary ,content,updated_at } }`
const ComponentWithData = graphql(MyQuery)(Newposts)
export default ComponentWithData