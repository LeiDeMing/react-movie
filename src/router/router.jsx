import { HashRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import BasicLayout from '../layouts/BasicLayout/index'

const router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' component={BasicLayout}></Route>
            </Switch>
        </HashRouter>
    )
}

export default router()