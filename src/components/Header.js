import '../styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import { Home } from '@mui/icons-material';
import { SupervisorAccount } from '@mui/icons-material';

function Header() {
  return (
    <div className='header'>
        
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>

            <div class="header__search">
                <SearchIcon/>

                <input type="text" name="" id=""/>
            </div>

        </div>

        <div className="header__right">
            <HeaderOption Icon={Home} title='Home'/>
            <HeaderOption Icon={SupervisorAccount} title='My Network'/>
        </div>

    </div>
  )
}

export default Header