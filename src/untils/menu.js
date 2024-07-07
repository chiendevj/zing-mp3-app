import icons from './icons'
const {MdOutlineLibraryMusic, FiDisc, LiaChartLineSolid} = icons

export const SidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icon: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path: '',
        text: 'Khám phá',
        icon: <FiDisc size={24}/>
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icon: <LiaChartLineSolid size={24}/>
    },
]