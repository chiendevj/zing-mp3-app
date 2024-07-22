import React, { memo, useEffect, useState, useRef } from 'react';
import bgChart from '../assets/images/bg-chart.png';
import 'chart.js/auto';
import { useNavigate } from 'react-router-dom';
import path from '../untils/path';
import SongReleaseItem from './SongReleaseItem';
import { ChartBanner } from '.';

const ChartSection = ({ chart, rank }) => {
    const navigate = useNavigate();

    return (
        <div className="px-14 my-12 relative">
            <img
                src={bgChart}
                alt="bg chart"
                className="object-cover rounded-md"
                style={{ aspectRatio: '3/1' }}
            />
            <div className="absolute z-10 opacity-70 top-0 right-14 left-14 bottom-0 px-14 rounded-md bg-gradient-to-t from-[#381452] to-[#ba53f5]"></div>
            <div className="h-[90%] absolute z-20 top-0 right-14 left-14 bottom-0 p-4">
                <h3 
                    onClick={() => navigate(path.ZING_CHART)}
                    className="cursor-pointer w-fit text-2xl font-bold bg-gradient-text bg-clip-text text-transparent">
                    #zingchart
                </h3>
                <div className="flex gap-4 h-full mt-3">
                    <div className="flex-4 w-full h-full flex items-center flex-col">
                        <div className='w-full'>
                            {rank && rank.slice(0, 3).map((item, index) => (
                                <div className='mb-3' key={item.encodeId}>
                                    <SongReleaseItem
                                        item={item}
                                        order={index + 1}
                                        percent={Math.round((item.score * 100) / chart.totalScore)}
                                    />
                                </div>
                            ))}
                        </div>
                        <span
                            onClick={() => navigate(path.ZING_CHART)}
                            className='w-fit bg-transparent relative text-main-100 py-1 px-5 rounded-full border cursor-pointer hover:bg-[rgba(249,250,251,0.6)] hover:text-main-500 duration-300 border-main-100'>Xem Thêm</span>
                    </div>
                    <div className="flex-6 w-full h-full">
                        <ChartBanner rank={rank} chart={chart}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ChartSection);
