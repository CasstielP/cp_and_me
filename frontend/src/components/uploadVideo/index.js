import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";



const UploadVdeo = () => {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [video, setVideo] = useState()
    const user = useSelector((state)=> state.session.user)
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('video', video)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('userId', user.id)

        await fetch('/api/videos/upload', {
            method: 'POST',
            headers: {
                'X-CSRF-Token': 'EpY19HOg-BBHRXw2buxmHbfiu0zkNBtJxwjM'
            },
            body: formData,
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
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
                type='file' onChange={updateVideo}
            >
            </input>
            <button type="submit"></button>
        </form>
        </>
    )
}

export default UploadVdeo