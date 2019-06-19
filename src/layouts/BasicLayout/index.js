import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainRouters from './MainRouters'
export default class BasicLayout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <MainRouters></MainRouters>
                <Footer></Footer>
            </div>
        )
    }
}