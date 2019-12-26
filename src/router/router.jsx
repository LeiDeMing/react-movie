import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import GufenLayout from '../layouts/GufenLayout/index'
import Qyn from '../layouts/QynLayout/index'

const router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path='/gufen' component={GufenLayout}></Route>
                <Route path='/qyn' component={Qyn}></Route>
                <Redirect from='/' to='/gufen'></Redirect>
                {/* <Redirect from='/' to='/qyn'></Redirect> */}
            </Switch>
        </HashRouter>
    )
}

export default router()