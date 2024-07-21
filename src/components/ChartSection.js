import React, { memo, useEffect, useState, useRef } from 'react';
import bgChart from '../assets/images/bg-chart.png';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import SongReleaseItem from './SongReleaseItem';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import path from '../untils/path';

const ChartSection = ({ chart, rank }) => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [selected, setSelected] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const chartRef = useRef();
    const [tooltipState, setTooltipState] = useState({
        opacity: 0,
        top: 0,
        left: 0,
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointBackgroundColor: '#fff',
        scales: {
            x: {
                ticks: {
                    color: 'rgba(245, 246, 250,0.7)',
                    callback: function (value, index, values) {
                        return index % 2 === 0 ? this.getLabelForValue(value) : '';
                    },
                    font: {
                        size: 8.5,
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
                    color: 'rgba(245, 246, 250,0.3)',
                },
                min: 0,
                max: 80,
                border: { dash: [2, 4] },
            },
        },
        plugins: {
            legend: false,
            tooltip: {
                enabled: false,
                external: ({ tooltip }) => {
                    if (!chartRef.current) return;

                    if (tooltip.opacity === 0) {
                        if (tooltipState.opacity !== 0) setTooltipState(prev => ({ ...prev, opacity: 0 }));
                        return;
                    }

                    const counters = [];
                    for (let i = 0; i < 3; i++) {
                        counters.push({
                            data: chart?.items[Object.keys(chart?.items)[i]].map(item => item.counter),
                            encodeId: Object.keys(chart?.items)[i]
                        });
                    }

                    const rs = counters.find(i => i.data.includes(Math.round(+tooltip.body[0]?.lines[0] * chart?.totalScore / 100)));
                    setSelected(rs?.encodeId);

                    const chartRect = chartRef.current.canvas.getBoundingClientRect();
                    const tooltipWidth = 350; 
                    const tooltipHeight = 30; 
                    const leftPosition = tooltip.caretX + tooltipWidth > chartRect.width
                        ? chartRect.width - tooltipWidth
                        : tooltip.caretX;
                    const topPosition = tooltip.caretY + tooltipHeight > chartRect.height
                        ? chartRect.height - tooltipHeight
                        : tooltip.caretY;

                    const newTooltipData = {
                        opacity: 1,
                        left: Math.max(leftPosition, 0),
                        top: Math.max(topPosition, 0),
                    };

                    if (!_.isEqual(tooltipState, newTooltipData)) setTooltipState(newTooltipData);
                }
            }
        },
        hover: {
            mode: 'dataset',
            intersect: false,
        },
    };

    useEffect(() => {
        if (chart && chart.times && chart.items) {
            const labels = chart.times.map(item => `${item.hour}:00`);

            const dataSets = [];
            for (let i = 0; i < 3; i++) {
                dataSets.push({
                    data: chart.items[Object.keys(chart.items)[i]]
                        .map(item => (item.counter * 100) / chart.totalScore),
                    borderColor: ['#4a90e2', '#27bd9c', '#e35050'][i],
                    tension: 0.3,
                    borderWidth: 2,
                });
            }
            setData({ labels, datasets: dataSets });
        }
    }, [chart]);

    useEffect(() => {
        if (selected) {
            setSelectedItem(rank.find(item => item.encodeId === selected));
        }
    }, [selected, rank, selectedItem]);

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
                        {data && (
                            <div className="w-full h-full relative">
                                <Line data={data} ref={chartRef} options={options} />
                                <div
                                    className='tooltip'
                                    style={{
                                        position: 'absolute',
                                        opacity: tooltipState.opacity,
                                        left: tooltipState.left,
                                        top: tooltipState.top,
                                    }}
                                >
                                    <SongReleaseItem
                                        item={selectedItem}
                                        percent={Math.round((selectedItem?.score * 100) / chart.totalScore)}
                                        indexBgColor={rank.findIndex(item => item.encodeId === selected)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ChartSection);
