import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routerData from '@/routerConfig'
export default class MainRouters extends Component {

    renderNormalRoute(item, index) {
        return item.component ? (
            <Route
                key={index}
                path={item.path}
                component={item.component}
            >
            </Route>
        ) : null
    }

    render() {
        return (
            <Switch>
                {
                    routerData.map(this.renderNormalRoute)
                }
            </Switch>
        )
    }
}