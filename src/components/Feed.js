import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from "@mui/icons-material";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import "../styles/Feed.css";
import InputOption from './InputOption';
import Post from "./Post";

function Feed() {

    const [posts, setPosts] = useState([]);
    const [inputVal, setInputVal] = useState('');

    useEffect(() => {


        const postQuery = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
        
        const unsub = onSnapshot(postQuery, snapshot => {
            setPosts(snapshot.docs.map(post => (
                {
                    id: post.id,
                    data: post.data()
                }
            )))
        })

        return () => unsub();
    }, [])

    const sendPost = (e)=> {
        e.preventDefault(); 
        
        addDoc(collection(db, 'posts'), {
            name: "Kiran Potdar",
            description: "Test Description", 
            message: inputVal,
            photoUrl: '',
            timestamp: serverTimestamp()
        });

        setInputVal('');
    }


    return (
        <div className='feed'>
            <div class="feed__inputContainer">
                <div class="feed__input">
                    <Create />

                    <form >
                        <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>

                </div>

                <div class="feed__inputOptions">
                    <InputOption Icon={Image} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={Subscriptions} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNote} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDay} title="Write an article" color="#7FC15E"/>
                </div>
            </div>

            {/* Posts */}
            {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}

            {/* <Post 
                name="Kiran Potdar" 
                description="test description" message="dasssasasasasssssssssssssssssssssssssadsfdgdcddwsrsfxcasdsadadadaaaaaaaaaaaaaaaaaaaaa" 
            /> */}


        </div>
    )
}

export default Feed;