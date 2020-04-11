import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import GufenLayout from '../layouts/GufenLayout/index'
import Qyn from '../layouts/QynLayout/index'
import Reading from '../layouts/ReadingLayout/index'

const router = () => {
    return (
        <HashRouter>
            <Switch>
                {/* <Route path='/gufen' component={GufenLayout}></Route> */}
                {/* <Route path='/qyn' component={Qyn}></Route> */}
                <Route path='/reading' component={Reading}></Route>
                <Redirect from='/' to='/reading'></Redirect>
                {/* <Redirect from='/' to='/qyn'></Redirect> */}
            </Switch>
        </HashRouter>
    )
}

export default router()