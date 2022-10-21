import HomeIcon from '@mui/icons-material/Home';
import ResumeIcon from '@mui/icons-material/HistoryEdu';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <HomeIcon/>, 
        label: 'Inicio',
        route: 'home'
    },
    {
        id: 1,
        icon: <ResumeIcon/>, 
        label: 'Resumen',
        route: 'resume'
    }
]