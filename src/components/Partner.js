import React from 'react';

const Partner = () => {
    const partners = [
        "empire.png",
        "believe.png",
        "monstercat.png",
        "route-note.png",
        "yg.png",
        "universal-1.png",
        "kakao.png",
        "beggers.png",
        "SM-Entertainment.png",
        "stone-music.png",
        "FUGA.png",
        "sony.png",
        "genie.png",
        "ingrooves.png",
        "danal.png",
        "orcahrd.png"
    ];

    return (
        <div className="container px-14 py-8 flex items-center flex-col">
            <h3 className="text-sm font-bold mb-6 text-main-700 hover:text-main-500 cursor-pointer">
                <span>ĐỐI TÁC ÂM NHẠC</span>
            </h3>
            <div className="grid grid-cols-8 gap-4 w-full">
                {partners.map((partner, index) => (
                    <div key={index} className="p-3">
                        <div className="bg-white rounded-xl p-2 flex justify-center items-center">
                            <figure className="w-12 h-12">
                                <img
                                    src={`https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/${partner}`}
                                    alt={partner.replace('.png', '')}
                                    className="w-full h-full object-contain"
                                />
                            </figure>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partner;
