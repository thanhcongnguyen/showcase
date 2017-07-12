import React from 'react'


export default class Footer extends React.Component{
	render(){
		return(
				<footer id="footer">
					<div className="container">
						
						<div className="row">
							
								 <ul className="social">
								 	<li>
								 		<a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
								 	</li>
								 	<li>
								 		<a href="#"><i className="fa fa-medium" aria-hidden="true"></i></a>
								 	</li>
								 	<li>
								 		<a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a>
								 	</li>
								 	<li>
								 		<a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
								 	</li>

								 	<li>
								 		<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
								 	</li>
								 	<li>
								 		<a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
								 	</li>
								 </ul>
						</div>

						<div className="row">
							<p>
								  Bản quyền @2017 - Website <a href="#">blogdev.vn</a> được phát triển bởi Nguyễn Thành Công.
							</p>
						</div>

					</div>
				</footer>
			)
	}
}
