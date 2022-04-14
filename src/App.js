import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from './features/userSlice';
import Login from './components/Login';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Widgets from './components/Widgets';

function App() {

	const user = useSelector(selectUser);
	const dispatch = useDispatch();


	useEffect(() => {

		onAuthStateChanged(auth, (userAuth) => {
			if(userAuth){
				dispatch(login({
					email: userAuth.email,
					uid: userAuth.uid,
					displayName: userAuth.displayName,
					photoUrl: userAuth.photoURL
				}))
			} else{
				dispatch(logout());
			}
		})

	}, [])

	return (
		<div className="app">

			{/* Header */}
			<Header/>

			{!user ? <Login /> : (
				
				<div class="app__body">
					<Sidebar/>
				
					{/* Feed */}
					<Feed/>
					
					{/* Widgets */}
					<Widgets/>
				</div>
			)}
			
		</div>
	);
}

export default App;
