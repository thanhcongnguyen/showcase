import React from 'react'
import { Field, reduxForm } from 'redux-form'

class SearchForm extends React.Component{
	render(){
		const { handleSubmit } = this.props

		

		return(
			<div className="search clearfix">
					<h3>Tìm bài viết trên blog</h3>
					<form onSubmit={ handleSubmit }>
						<Field name="inputSearch" component="input" type="text" placeholder="Nhập Từ Khóa ..."/>
						<button type="submit" disabled={!this.props.valid}>tìm kiếm</button>
					</form>	
					
			</div>
			)
	}
}
		const validate = values => {
  			const errors = {}
  			if (!values.inputSearch) {
   				 errors.inputSearch = 'Required'
  			}else if(/[!@#$%^&*()-+=_.<>'';:""~]/i.test(values.inputSearch)){
  				errors.inputSearch = 'Invalid Input Search'
  			}

	  		return errors
		}

const createReduxForm = reduxForm({ 
	form: 'search',
	validate: validate 
})
const Searchform = createReduxForm( SearchForm )
export default Searchform