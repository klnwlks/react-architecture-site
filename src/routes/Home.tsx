import { useState, useEffect } from 'react'
import './Home.scss'
import './Home-m.scss'

import * as projects from '../assets/projects.json'

interface Project {
    location: String,
    desc: String,
    imglink: String,
}

interface Projects {
    data: Project[]
}

export default function Home() {
    const [recent, setRecents] = useState<Projects>()

    useEffect(() => {
	setRecents(projects as Projects) 
    })

    return (
	<div id="home">
	    <section className="intro">
		<div className="intro-cont">
		    <div className="intro-anim">
			<div className="door" />
			<div className="wall" />
			<div className="roof" />
		    </div>

		    <div className="intro-text">
			<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum pulvinar rhoncus. </h2>
		    </div>
		</div>
	    </section>

	    <section className="about">
		<div className="wrapper-1">
		    <div className="about-text">
			<h1>What do we do?</h1>
			<p> 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at justo egestas, fermentum enim quis, malesuada ex. Nulla sagittis convallis tortor a ultricies. Maecenas tristique dictum dui luctus aliquet. Nunc sollicitudin neque diam, sollicitudin semper justo fringilla id. Pellentesque et mauris a ante interdum sagittis quis vitae lorem. Nam semper mauris nec vulputate volutpat. Phasellus aliquam posuere facilisis. Aenean convallis malesuada mauris quis consequat. Etiam nisl ante, ultrices nec viverra nec, posuere eget magna.
			<br />
			<br />
    In imperdiet iaculis lorem vitae egestas. Fusce in nulla enim. Phasellus lobortis euismod mauris. Praesent molestie egestas ligula, quis tincidunt lacus. Cras in tempor justo. Duis bibendum ligula at lectus dignissim pellentesque. Nulla sed commodo elit. Vivamus sed eros aliquam, convallis orci eu, malesuada dui.
			</p>
		    </div>

		    <div className="about-img">
			<img src="2.jpg" />
		    </div>
		</div>

	    </section> 

	    <section className="projects">
		<h1>Recent Projects</h1>
		<div className="project-slides">
		    {recent?.data.map((element, index) => {
			return <div className={"slide slide-" + index} key={index}>
			    <img src={element.imglink as string} />
			    <div className="slide-text">
				<h2>{element.location}</h2>
				<h3>{element.desc}</h3>
			    </div>
			</div>
		    })}
		</div>
	    </section>

	    <section className="who">
		<div className="who-text">
		    <h1>Who are we?</h1>
		    <p>
		    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mattis eros, vitae dictum dui dignissim eget. Suspendisse porttitor quis neque id semper. Duis quam ipsum, fermentum nec magna nec, mollis tincidunt lorem. Aliquam libero felis, egestas vitae quam quis, facilisis maximus velit. Nulla sodales tincidunt ullamcorper. Suspendisse urna mauris, posuere a ultricies vel, pellentesque id elit. Aliquam pharetra, tellus in sollicitudin malesuada, mauris nunc convallis nunc, vitae malesuada libero enim nec lacus.
		    </p>
		</div>

		<div className="who-img">
		    <img src="3.jpg" />
		</div>
	    </section>
	</div>
    )
}
