import React from 'react'

class Post extends React.Component{
	render(){
		return(
			<li>
				<div className="row">
					<div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
						<a href="#" className="thumb">
							<img src={`uploads/${this.props.image}`} alt={this.props.image} />
						</a>
					</div>
					<div className="col-lg-10 col-md-10 col-sm-10 col-xs-9">
						<div className="wrapper-name-date">
							<h3><a href="#" href="#" className="txt-primary">{this.props.title_vi}</a></h3>
								<h4 className="create-date txt-info">{this.props.date}</h4>
						</div>
					</div>
				</div>	
			</li>

		)
	}
}

export default Post