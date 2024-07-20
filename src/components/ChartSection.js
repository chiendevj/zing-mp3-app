import React, { memo, useEffect, useState } from 'react';
import bgChart from '../assets/images/bg-chart.png';
import { Line } from 'react-chartjs-2';
import { animator, Chart, plugins, scales } from 'chart.js/auto';
import { color } from 'chart.js/helpers';
import SongReleaseItem from './SongReleaseItem';

const ChartSection = ({ chart, rank }) => {
    const [data, setData] = useState(null);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointBackgroundColor: 'white',
        scales: {
            x: {
                ticks: {
                    color: '#ced9d9',
                    callback: function (value, index, values) {
                        return index % 2 === 0 ? this.getLabelForValue(value) : '';
                    },
                    font: {
                        size: 9,
                    },
                },
                grid: {
                    color: 'transparent',
                },
            },
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    color: '#ced9d9',
                },
                min: chart?.minScrore,
                max: chart?.maxScrore,
                border: { dash: [2, 4] }
            },
        },
        plugins: {
            legend: false,
        },
        hover: {
            mode: 'dataset',
            intersect: false,
        },
    };

    useEffect(() => {
        if (chart && chart.times && chart.items) {
            const labels = chart.times.map((item) => `${item.hour}:00`);

            const dataSets = [];
            for (let i = 0; i < 3; i++) {
                dataSets.push({
                    data: chart.items[Object.keys(chart.items)[i]]
                        .map((item) => item.counter),
                    borderColor: ['#4a90e2', '#27bd9c', '#e35050'][i],
                    tension: 0.3,
                    borderWidth: 2,
                });
            }
            setData({ labels, datasets: dataSets });
        }
    }, [chart]);

    return (
        <div className="px-14 my-12 relative">
            <img
                src={bgChart}
                alt="bg chart"
                className="object-cover rounded-md"
                style={{ aspectRatio: '3/1' }}
            />
            <div className="absolute z-10 opacity-80 top-0 right-14 left-14 bottom-0 px-14 rounded-md bg-gradient-to-t from-[#381452] to-[#ba53f5]"></div>
            <div className="h-[90%] absolute z-20 top-0 right-14 left-14 bottom-0 p-4">
                <h3 className="text-2xl text-main-100 font-bold">#zingchart</h3>
                <div className="flex gap-4 h-full mt-3">
                    <div className="flex-4 w-full h-full flex items-center flex-col">
                        <div className='w-full'>
                        {rank && rank.slice(0, 3).map((item, index) => (
                            <div className='mb-3'>
                                <SongReleaseItem
                                    item={item}
                                    order={index + 1}
                                    percent={Math.round(item?.score * 100 / chart?.totalScore)}
                                    key={item.encodeId}
                                />
                            </div>
                        ))}
                        </div>
                        <span className='w-fit bg-transparent relative text-main-100 py-2 px-6 rounded-full border cursor-pointer hover:bg-main-300 hover:text-main-500 duration-300 border-main-100'>Xem Thêm</span>
                    </div>
                    <div className="flex-6 w-full h-full">
                        {data && (
                            <div className="w-full h-full relative">
                                <Line data={data} options={options} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ChartSection);
