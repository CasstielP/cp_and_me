


const VideoCard = ({video}) => {
    console.log('videovideovideovideovideovideo',video)


    return (
        <>
        <div>
            <img style={{height: '150px', width: '200px'}} src={video.thumbnailUrl}></img>
        </div>
        </>
    )
}


export default VideoCard