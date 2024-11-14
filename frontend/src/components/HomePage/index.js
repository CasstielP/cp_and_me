import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as VideoActions from '../../store/video'
const { default: VideoCard } = require("../VideoCard")



const HomePage = () => {
    const dispatch = useDispatch()
    const allVideos = useSelector(state => Object.values(state.video.allVideos)) 
    
    
    useEffect(()=> {
        dispatch(VideoActions.fetchAllVideos())
    }, [dispatch])
    
    

    return (
        <>
            <div>
                {
                    allVideos.map((video) => 
                        <VideoCard key={video.id} video={video} />
                    )
                }
            </div>
        </>
    )
}


export default HomePage