import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { csrfFetch } from "../../store/csrf";
import VideoThumbnailSelector from "../thumbNailSelector";
import * as videoActions from '../../store/video'

const UploadVideo = () => {
    
    const dispatch = useDispatch()
    const allVideos = useSelector(state => state.video.allVideos)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [video, setVideo] = useState(null)
    const [thumbnail, setThumbnail] = useState(null)
    const user = useSelector((state)=> state.session.user)
    const history = useHistory()
    
    
    
    useEffect(()=> {
        dispatch(videoActions.fetchAllVideos())
    },[])
    
    if (!user) return <Redirect to="/" />;

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('video', video)
        formData.append('title', title)
        formData.append('description', description)
        // formData.append('thumbnail', thumbnail)
        formData.append('userId', user.id)  
        
        await csrfFetch('/api/videos/upload', {
            method: 'POST',
                body: formData,
                credentials: 'include'
            })
        .then(response => response.json())
        .then(data =>{
            console.log('Success:', data)
            window.alert('success!')
            history.push('/')
        })
        .catch(error => console.error('Error:', error));
    }

    const updateVideo = (e) => {
        const file = e.target.files[0]
        setVideo(file)
        
    }



    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text"
             value={title}
             placeholder="title"
             onChange={(e)=> setTitle(e.target.value)}>
             
            </input>
            <input type="text"
             value={description}
             placeholder="description"
             onChange={(e)=> setDescription(e.target.value)}>
            </input>
            <input
                id="video-file-tag"
                type='file' onChange={updateVideo}
            >
            </input>
            <VideoThumbnailSelector videoFile={video} onThumbnailSelect={setThumbnail}/>
            <button type="submit">upload</button> 
        </form>
        </>
    )
}

export default UploadVideo;

