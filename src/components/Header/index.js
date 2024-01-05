import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
    <div className="header">
        <Link to='/' className='nav-link'>
        <h1 className='heading'>Modelyn Torff</h1>
        </Link>
        <div className="sections">
            <Link to='/about' className='nav-link'>
            <p className='section_heading'>About</p>
            </Link>
            <Link to='/projects' className='nav-link'>
            <p className='section_heading'>Projects</p>
            </Link>
            <Link to='/contacts' className='nav-link'>
            <p className='section_heading'>Contacts</p>
            </Link>
        </div>
    </div>
)

export default Header 
