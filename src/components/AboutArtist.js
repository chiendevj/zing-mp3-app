import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { truncateDescription, getCountryCodeFromName } from '../untils/app';
import icons from '../untils/icons';
import numeral from 'numeral';
import { Tooltip } from 'react-tooltip';


function AboutArtist({ artistBasicInfo }) {
    // Get the country code from the national name
    const countryCode = getCountryCodeFromName(artistBasicInfo?.national);
   
    return (
        <div className='container flex w-full flex-col my-12'>
            <h3 className='text-xl font-bold mb-5'>
                Về&nbsp;{artistBasicInfo?.name}
            </h3>
            <div className='flex'>
                <div className='w-2/5 h-full mr-5 rounded-md overflow-hidden'>
                    <img
                        src={artistBasicInfo?.thumbnailM}
                        alt={artistBasicInfo?.title}
                        className='relative object-cover inset-0'
                        style={{ aspectRatio: '4/3' }}
                    />
                </div>
                <div className='w-3/5 mr-20'>
                    <div className='mb-10'>
                        <span className='text-lg font-bold text-main-600 flex items-center'>
                            <span>{artistBasicInfo?.realname}</span>&nbsp;-
                            {countryCode ? (
                                <ReactCountryFlag
                                    countryCode={countryCode}
                                    svg
                                    style={{
                                        fontSize: '1.5em',
                                        marginLeft: '0.5em'
                                    }}
                                    aria-label={artistBasicInfo?.national}
                                />
                            ) : (
                                <span className='ml-2'>{artistBasicInfo?.national}</span>
                            )}
                        </span>
                        <div className='my-4'>
                            {artistBasicInfo?.biography ? (
                                <>
                                    <p className='text-main-700 text-sm' dangerouslySetInnerHTML={{ __html: truncateDescription(artistBasicInfo?.biography, 300) }} />
                                    <span className='text-main-500 text-xs font-bold'>XEM THÊM</span>
                                </>
                            ) : (
                                <p className='text-red-700'>Thông tin không có sẵn</p>
                            )}
                        </div>
                    </div>
                    <div className='flex justify-start w-full'>
                        <div className='text-left mr-14'>
                            <h3 className='text-xl font-bold text-main-600 mb-1'>{numeral(artistBasicInfo?.totalFollow).format('0,0').replace(/,/g, '.')}</h3>
                            <span className='text-sm text-main-700'>Người quan tâm</span>
                        </div>
                        {artistBasicInfo?.awards && (
                        <div className='text-left mr-14'>
                            <h3 className='text-xl font-bold text-main-600 mb-1'>{artistBasicInfo?.awards.length}</h3>
                            <span className='text-sm text-main-700'>Giải thưởng</span>
                        </div>
                        )}
                        {/* Spotlight */}
                        {artistBasicInfo?.spotlight && (
                            <span className='mr-10'>
                                <icons.Spotlight />
                            </span>
                        )}
                        {/* Awards */}
                        {artistBasicInfo?.awards && (
                            <span className='mr-5 cursor-pointer' data-tooltip-id="award">
                                <icons.Award />
                                <Tooltip id="award" place="top" type="dark" effect="solid">
                                    {artistBasicInfo.awards.map((item, index) => (
                                        <div key={index}>{item}</div>
                                    ))}
                                </Tooltip>
                            </span>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutArtist;
