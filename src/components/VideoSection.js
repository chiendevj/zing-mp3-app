import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import icons from '../untils/icons';
import ModalVideo from './ModalVideo';
import TitleSection from './TitleSection';
import * as apis from '../apis'
import { toast } from 'react-toastify';

const VideoSection = ({ videos, artistThumbnail }) => {
    const [id, setId] = useState(null);
    const [srcVideo, setsrcVideo] = useState(null)
    const handleVideoClick = (id) => {
        setId(id)
    };

    useEffect(() => {
      const fetchVideo = async () => {
        const response = await apis.apiGetVideo(id)
        
        if (response.data.err === 0) {
            setsrcVideo(response.data?.data?.streaming?.mp4['720p'] || response.data?.data?.streaming?.mp4['360p'])
        } 
        else {
           return toast.warn('')
        }
      }
      fetchVideo()
    }, [id])

    const handleCloseModal = () => {
        setsrcVideo(null);
    };

    

    return (
        <div className='container my-10'>
            {/* Modal Video */}
            <ModalVideo src={srcVideo} onClose={handleCloseModal} />

            <TitleSection title='MV' top100={false} />
            <div className='grid grid-cols-3 gap-4'>
                {videos?.slice(0, 3).map((video, index) => (
                    <div key={index} className='flex flex-col'>
                        <div className="relative rounded-lg overflow-hidden group">
                            <img
                                src={video.thumbnailM}
                                alt={video.title}
                                title={video.title}
                                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300">
                                <button
                                    className="absolute z-10 text-white opacity-0 group-hover:opacity-100 p-1 rounded-full border border-white transition-opacity duration-300"
                                    onClick={() => handleVideoClick(video.encodeId)}
                                >
                                    <icons.MdPlayArrow size={35} />
                                </button>
                            </div>
                        </div>
                        <div className='mt-2 flex gap-2'>
                            <span className='h-10 w-10 overflow-hidden rounded-full'>
                                <img
                                    src={artistThumbnail}
                                    alt={video.title}
                                    title={video.title}
                                    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </span>
                            <div className='flex flex-col'>
                                <span className='text-sm font-bold text-main-600'>{video.title}</span>
                                <span className='text-xs font-normal text-main-700'>
                                    {video.artists?.map((artist, index) => (
                                        <NavLink
                                            key={artist.id}
                                            to={`/${artist.alias}`}
                                            className="cursor-pointer hover:text-main-500 hover:underline"
                                        >
                                            {artist.name}{artist.spotlight && '★'}
                                            {index < video.artists?.length - 1 && ', '}
                                        </NavLink>
                                    ))}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoSection;
