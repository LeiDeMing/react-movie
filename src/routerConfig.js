import Nav from './pages/Nav'
import Movie from './pages/Movie'
import Movie2 from './pages/Movie2'
import Movie3 from './pages/Movie3'
const routerConfig=[
    {
        path:'/96LimsToNifty',
        component:Movie
    },{
        path:'/ExcelLimmsToNifty',
        component:Movie2
    },{
        path:'/ResultLimmsToNifty',
        component:Movie3
    }/* ,{
        path:'/',
        component:Nav
    } */
]

export default routerConfig