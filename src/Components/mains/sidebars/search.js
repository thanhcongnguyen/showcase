import React from 'react'
import SearchForm  from './searchForm'
import Post from './onePost'
import { gql, graphql } from 'react-apollo'



class Search extends React.Component{
	

	constructor(props){
		super(props);
		this.state = {
			searchText: ''
		}
	}

	submit =  (values) => {

		return new Promise((resolve, reject)=>{
			resolve(
				this.setState({searchText: values.inputSearch})
			)
		}).then(()=>{
			console.log(this.state.searchText)
		})
		
		
	}

	render(){
		
		const { data: { loading, search } } = this.props
		 

		if(loading==true){
			return <SearchForm onSubmit={ this.submit }/>
		}

	




		if(loading==false){
			if(search.length==0){
				return (
					<div>
						<SearchForm onSubmit={ this.submit }/>
						<p>Không tìm thấy dữ liệu</p>
						<p>{ this.state.searchText }</p>
					</div>
				)
			}else{
				return (
					<div>
						<SearchForm onSubmit={ this.submit }/>
						<div className="wiget-content">
							<ul>
								{
									search.map(function(i){
										return <Post key={i.id}  image={i.image} title_vi={i.title_vi} date={i.updated_at} />
									})
								}
							</ul>
						</div>
					</div>
				)

			}
			
		}
	}
}


const SEARCH_QUERY = gql`
	query($searchText: String!) { 
		search(title: $searchText){
    		id
    		title_en
    		title_vi
    		image
    		updated_at
    	}
}`

const MyComponentWithData = graphql(SEARCH_QUERY, {
  options:()=>({
  	variables: {
  		searchText: "async-sync"
  	}
  })
})(Search)

export default MyComponentWithData

