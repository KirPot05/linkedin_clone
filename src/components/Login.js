import '../styles/Login.css';
import { auth } from '../firebase';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profileUrl, setProfileUrl] = useState('');

    const dispatch = useDispatch();

    const register = async () => {

        try{
            if (!name) {
                throw new Error('Please enter a full name');
            }
    
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user, {
                displayName: name,
                photoURL: profileUrl
            });
    
    
            dispatch(login({
                email: user.email,
                uid: user.uid,
                displayName: user.displayName,
                photoURL: profileUrl
            }));

        } catch(e) {
            alert(e.message);
        }
        
    };


    const loginToApp = async (e) => {

        e.preventDefault();
        try {

            const { user } = await signInWithEmailAndPassword(auth, email, password);

            dispatch(login({
                email: user.email,
                uid: user.uid,
                displayName: user.displayName,
                photoURL: profileUrl
            }));


        } catch (e) {
            alert(e.message);
        }


    };

    return (
        <div className='login'>

            <img
                src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
                alt=""
            />

            <form>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Full Name (required)'
                />

                <input
                    type="text"
                    value={profileUrl}
                    onChange={e => setProfileUrl(e.target.value)}
                    placeholder='Profile Pic Url (optional)'
                />

                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email'
                />

                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
                />

                <button
                    type="submit"
                    onClick={loginToApp}
                >Sign In</button>

            </form>

            <p>
                Not a member?{"  "}
                <span
                    className='login__register'
                    onClick={register}
                >Register Now</span>
            </p>

        </div>
    )
}

export default Login