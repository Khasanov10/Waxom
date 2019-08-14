import React, { Component } from "react";

class ProjectsItem extends Component {
	render() {
		const { img, h3, p, label, iconLink, iconSearch } = this.props.item;
		return (
			<div label={label} className='col-4 projects-item'>
				<div className='projects-item-top'>
					<img src={img} alt='waxom-projects' />
					<div className='projects-item-icons'>
						<a href='https://google.com'>
							<span className={iconLink} />
						</a>
						<a href='https://google.com'>
							<span className={iconSearch} />
						</a>
					</div>
				</div>
				<div className='projects-item-bottom'>
					<h3>{h3}</h3>
					<p>{p}</p>
					<span className='project-triangle' />
				</div>
			</div>
		);
	}
}

export default ProjectsItem;
