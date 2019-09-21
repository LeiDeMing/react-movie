import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import GufenLayout from '../layouts/GufenLayout/index'

const router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path='/gufen' component={GufenLayout}></Route>
                <Redirect from='/' to='/gufen'></Redirect>
            </Switch>
        </HashRouter>
    )
}

export default router()