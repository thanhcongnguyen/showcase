import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import { graphql} from 'react-apollo'
import gql from 'graphql-tag'

class Menu extends React.Component{
	render(){
        const { match } = this.props
        const { data: { loading, Categories } } = this.props
        if(loading==false){
            var Menu = Categories.map((i)=>{
                return (
                    <li key={i.id} >
                        <NavLink exact to="">{i.name}</NavLink>
                        { (i.subCategories.length>0)? <ul className="sub-menu">
                            {
                                i.subCategories.map(function(x){
                                return(
                                    <li key={x.id} ><NavLink exact to="">{x.name}</NavLink>
                                    { (x.subCategories.length>0)? <ul className="sub-menu">
                                    {
                                        x.subCategories.map(function(k){
                                            return(
                                                <li key={k.id}><NavLink exact to="">{k.name}</NavLink></li>
                                            )
                                        })
                                    }
                                    </ul>: null}
                                    
                                    </li>
                                )
                                })
                            }
                        </ul>:null}
                        
                    </li>
                    )
                }
            )
        }

		return(
			<nav className="col-lg-9" id="main-nav">
				<ul className="main-menu">
					<li>
        				<NavLink exact to="/home"><i className="fa fa-home" aria-hidden="true"></i></NavLink>
    				</li>
    				{Menu}
				</ul>
			</nav>
			)
	}
}


const MyQuery = gql` { Categories {id, name, subCategories{id, name, subCategories{id, name}}}}`
const MyComponentWithData = graphql(MyQuery)(Menu)
export default MyComponentWithData





        