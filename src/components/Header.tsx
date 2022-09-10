import { NavLink, Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
    return (
	<div id="header">
	    <section className="email">
		<h1>////@//.com</h1>
	    </section>

	    <section className="logo">
		<Link to="/">
		    <img src="logo.png" />
		</Link>
	    </section>

	    <section className="num">
		<h1> +// /// //// /// </h1>
	    </section>
	</div>
    )
}
