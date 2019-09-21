import Nav from './pages/Nav'
import Movie from './pages/Movie'
import Movie2 from './pages/Movie2'
import Movie3 from './pages/Movie3'
const routerConfig=[
    {
        path:'/gufen/96LimsToNifty',
        component:Movie
    },{
        path:'/gufen/ExcelLimmsToNifty',
        component:Movie2
    },{
        path:'/gufen/ResultLimmsToNifty',
        component:Movie3
    }/* ,{
        path:'/',
        component:Nav
    } */
]

export default routerConfig