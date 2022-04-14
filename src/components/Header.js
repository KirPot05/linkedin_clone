import '../styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import { Home, SupervisorAccount, BusinessCenter, Chat, NotificationAdd } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = async () => {

    await signOut(auth)

    dispatch(logout());
  }

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
            <HeaderOption Icon={BusinessCenter} title='Jobs'/>
            <HeaderOption Icon={Chat} title='Messaging'/>
            <HeaderOption Icon={NotificationAdd} title='Notifications'/>
            <HeaderOption onClick={logoutOfApp} avatar={true} title='Log Out'/>
        </div>

    </div>
  )
}

export default Header