import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { forwardRef } from 'react';
import '../styles/Post.css';
import InputOption from './InputOption';


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
	return (
		<div ref={ref} className='post'>
			<div class="post__header">
				<Avatar src={photoUrl}> {name[0].toUpperCase()} </Avatar>
				<div class="post__info">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>

			<div class="post__body">
				<p>{message}</p>
			</div>

			<div class="post__buttons">
				<InputOption Icon={ThumbUpAltOutlined} title="Like" color='gray' />
				
				<InputOption Icon={ChatOutlined} title="Comment" color='gray' />
				
				<InputOption Icon={ShareOutlined} title="Share" color='gray' />
				
				<InputOption Icon={SendOutlined} title="Send" color='gray' />
				
			</div>
		</div>
	)
})

export default Post