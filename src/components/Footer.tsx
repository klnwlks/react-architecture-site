import './Footer.scss'

export default function Footer() {
    function scrollTo(){
	window.scrollTo(0, 0);
    }
    return (
	<div id="footer">
	    <div className="text" onClick={scrollTo}>
		<img src="4.png" />
		<h1> /./ Architecture</h1>
	    </div>
	    <div className="contact">
		<a href="mailto@//@email.com">/./@email.com</a>
		<a href="tel:+// /// /// ///">+// /// /// ///</a>
		<a href="">FB</a>
	    </div>
	</div>
    )
}
