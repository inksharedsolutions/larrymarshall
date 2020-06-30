import React, {useRef, useState} from 'react'
import {Link} from 'gatsby'
import	Logo from '../../static/logo/main_logo.png'


const Nav = (props) =>{

	const refSpan  = useRef();
	const [toggled, setToggled] = useState(false);

	const pages = [
		 'Home',
		 'About-the-Author', 
		 'About-the-Book', 
		 'Contact'
	]

	function capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}
	

	let Listed = pages.map((e) =>{
 		
		var newUrl = ((e).replace(/[ /]/g,"-").trim().toLowerCase());
		let filterUrl = (newUrl === 'home') ? '/' : newUrl;

		const res = e.replace(/[-/]/g," ").trim();
	
		return (
			<li>
				<Link 
					to={filterUrl}>
					{res}
				</Link>
			</li>
		)
	})

	const clickEvent = (e)=> {
		setToggled(!toggled);
	}
			
    return(		
        <> 
			<nav className="navigation"
				style={props.pathExt  ? {
						borderBottom: '1px solid rgb(41, 41, 41)'
					}:{
						borderBottom: '1px solid rgb(255, 255, 255)'
						}
					}
				>

				<ul className="list-nav-side">
					<li>
						<Link to="/">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about-the-author">
							About the Author
						</Link>
					</li>
				</ul>

				<div className="heading-logo">
					<img alt="logo" src={Logo}/>
				</div>

				<ul className="list-nav-side">
					<li>
						<Link to="/about-the-book">
							About The Book
						</Link>
					</li>
					<li>
						<Link to="/contact">
							Contact
						</Link>
					</li>
				 </ul>
			</nav>

        </>			
    )
}

export default Nav;