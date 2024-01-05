import Header from '../Header'
import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
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

        <form className="adding_project_field">
            <h1 className="main_heading">
                Add Project 
            </h1>
            <div className="details_container">
                <div className="name_group">
                    <label htmlFor="name" className="name">
                    Project Name
                    </label>
                    <input id='name' type="text" className="enter_letters" />

                </div>

                <div className="name_group">
                <label htmlFor="link" className="name">
                Project link
                </label>
                <input id='link' type="text" className='enter_letters' />

                </div>


                <div className="name_group">
                <label htmlFor="description" className="name">
                Description
                </label>
                <textarea id='description' rows='4' cols='50' type="text" className="description_field" />
                </div>

                <button type='button' className="add">Add</button>

            </div>
        </form>

    </div>
)

export default Home

