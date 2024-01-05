import './index.css'

const ProjectItem = props => {
    const {details} = props
    const {id, title, description, url} = details  
    return (
        <li className="project_show" key={id}>
            <div className="content">
                <h1 className="project_title">{title}</h1>
                <p className="project_content">{description}</p>
                <button className="view">View more</button>
            </div>
            <div className="picture">
                <img src={url} alt="ram" className="field_picture" />
            </div>
        </li>
    )
}

export default ProjectItem
