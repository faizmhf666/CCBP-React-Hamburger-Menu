import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-bar-container">
    <div className="nav-bar-content-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            className="hamburger-icon-button"
            type="button"
          >
            <GiHamburgerMenu />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-content-container">
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul className="list-container">
              <li className="list-item">
                <Link to="/" className="link-style">
                  <AiFillHome />
                  <h1 className="link-item-container">Home</h1>
                </Link>
              </li>
              <li className="list-item">
                <Link to="/about" className="link-style">
                  <BsInfoCircleFill />
                  <h1 className="link-item-container">About</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
