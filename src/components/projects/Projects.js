import React, { Component } from "react";
import ProjectsItem from "./ProjectsItem";
import Tabs from "./ProjectsTabs";
import "./Projects.css";
import { ProjectsData, tabNames } from "./ProjectsData";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ProjectsData,
			tabNames: tabNames,
			moreProject: {
				id: 7,
				img: require("../../img/projects/project-6.png"),
				h3: "Usus Farum Videntur",
				p: "Photography Design",
				label: "photography",
				iconLink: "icon-link projects-icon",
				iconSearch: "icon-search projects-icon"
			},
			count: 0
		};
		this.addState = this.addState.bind(this);
	}

	addState(e) {
		if (this.state.count == 0) {
			e.preventDefault();
			let arr = this.state.data;
			arr.push(this.state.moreProject);
			this.setState({ data: arr, count: 1 });
		} else if (this.state.count == 1) {
			e.preventDefault();
			return false;
		}
	}

	render() {
		const { data } = this.state;
		console.log(data);
		return (
			<React.Fragment>
				<div id='projects'>
					<div className='container'>
						<div className='projects-text col-8 mx-auto'>
							<h2>Our latest projects.</h2>
							<p>
								Investigationes demonstraverunt lectores legere me lius quod ii
								legunt saepius. Claritas est etiam processus dynamicus, qui
								sequitur mutationem consuetudium.
							</p>
						</div>

						<Tabs>
							<button className='btn'>All</button>
							<div className='row'>
								{data.map(item => (
									<ProjectsItem key={item.id} item={item} />
								))}
							</div>
							<button className='btn'>Web Design</button>
							<div className='row'>
								<ProjectsItem item={data[0]} />
								<ProjectsItem item={data[1]} />
							</div>
							<button className='btn'>Mobile App</button>
							<div className='row'>
								<ProjectsItem item={data[2]} />
								<ProjectsItem item={data[3]} />
							</div>
							<button className='btn'>Illustration</button>
							<div className='row'>
								<ProjectsItem item={data[4]} />
							</div>
							<button className='btn'>Photography</button>
							<div className='row'>
								<ProjectsItem item={data[5]} />
							</div>
						</Tabs>

						<div className='projects-more'>
							<a
								href='https://google.com'
								className='btn load-more'
								onClick={this.addState}
							>
								load more
							</a>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Projects;
