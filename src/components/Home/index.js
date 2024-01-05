import {Component} from 'react'
import Header from '../Header'
import {Link} from 'react-router-dom'
import {v4 as uuidV4} from 'uuid'
import './index.css'
import ContextProject from '../../ContextProject'

class Home extends Component {
    state = {
        username: '',
        link: '',
        description: '',
        projectsList: [],
        error: false,
    }

    onChangeUsername = event => {
        this.setState({username: event.target.value})
    }

    onChangeLink = event => {
        this.setState({link: event.target.value})
    }

    onChangeDescription = event => {
        this.setState({description: event.target.value})
    }

    onAddProject = event => {
        event.preventDefault()
        const {username, link, description, projectsList} = this.state 
        if (username !== '' || link !== '' || description !== '') {
            const newObject = {
                id: uuidV4(),
                title: username,
                description,
                url: link,
            }
            this.setState({
                projectsList: [...projectsList, newObject],
                error: false,
                username: '',
                link: '',
                description: '',
            })
        }else {
            this.setState({error: true})
        }
    }


    render() {
        const {username, link, description, error, projectsList} = this.state 
    
        return (
            <ContextProject.Provider
            value = {{
                projectsList,
            }}
            >
                <div className="home">
                    <Header />
                    <div className="home_container">

                        <div className="left_info">
                            <p className='design'>UI/UX Designer</p>
                            <h2 className='home_heading'>Hello,  my name is Madelyn Torff</h2>
                            <p className='home_para'>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>

                            <div>
                                <Link to='/projects'>
                                <button className='project_button'>Projects</button>
                                </Link>
                                <button className='linked_button'>LinkedIn</button>
                            </div>

                        </div>

                        <div className="home_image">
                            <img src="https://i.ibb.co/KjnL1K9/attachment.png" alt="girl" className="right_image" />
                        </div>

                    </div>

                    <form className="adding_project_field" onSubmit={this.onAddProject}>
                        <h1 className="main_heading">
                            Add Project 
                        </h1>
                        <div className="details_container">
                            <div className="name_group">
                                <label htmlFor="name" className="name">
                                Project Name
                                </label>
                                <input onChange={this.onChangeUsername} value={username} id='name' type="text" className="enter_letters" />

                            </div>

                            <div className="name_group">
                            <label htmlFor="link" className="name">
                            Project link
                            </label>
                            <input onChange={this.onChangeLink} value={link} id='link' type="text" className='enter_letters' />

                            </div>

                            <div className="name_group">
                            <label htmlFor="description" className="name">
                            Description
                            </label>
                            <textarea onChange={this.onChangeDescription} value={description} id='description' rows='4' cols='50' type="text" className="description_field" />
                            </div>

                            <button type='submit' className="add">Add</button>
                            {error && <p className='error'>Enter Fields</p>}
                        </div>
                    </form>

                </div>
        </ContextProject.Provider>
)
        }
}

export default Home

