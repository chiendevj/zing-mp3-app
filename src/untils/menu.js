import icons from './icons'
const {MdOutlineLibraryMusic, FiDisc, LiaChartLineSolid} = icons

export const SidebarMenu = [
    {
        path: 'mymusic',
        text: 'Thư Viện',
        icon: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path: '',
        text: 'Khám Phá',
        icon: <FiDisc size={24}/>
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icon: <LiaChartLineSolid size={24}/>
    },
]